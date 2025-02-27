package org.gluu.casa.plugins.authnmethod.service;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

import io.jans.as.model.fido.u2f.protocol.DeviceData;

import java.text.MessageFormat;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.*;
import java.util.stream.Collectors;
import java.util.stream.Stream;
import javax.annotation.PostConstruct;
import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;
import javax.inject.Named;

import org.apache.commons.httpclient.HttpStatus;
import org.apache.commons.httpclient.NameValuePair;
import org.apache.http.HttpEntity;
import org.apache.http.HttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.utils.URIBuilder;
import org.apache.http.impl.client.DefaultHttpClient;
import org.apache.http.params.HttpConnectionParams;
import org.apache.http.params.HttpParams;
import org.apache.http.util.EntityUtils;
import org.gluu.casa.core.ConfigurationHandler;
import org.gluu.casa.core.pojo.SuperGluuDevice;
import org.gluu.casa.plugins.authnmethod.SuperGluuExtension;
import org.gluu.casa.plugins.authnmethod.conf.SGConfig;
import org.slf4j.Logger;
import org.zkoss.util.resource.Labels;

/**
 * An app. scoped bean that encapsulates logic needed to enroll supergluu devices
 */
@Named
@ApplicationScoped
public class SGService extends FidoService {

    //See http://ip-api.com/docs/api:returned_values
    private static final String GEOLOCATION_URL_PATTERN = "http://ip-api.com/json/{0}?fields=regionName,country,city,status,message";
    private static final int GEO_REQ_TIMEOUT = 5000;  //wait 5 secs at most

    @Inject
    private Logger logger;

    private SGConfig conf;
    private ObjectMapper mapper;

    @PostConstruct
    private void inited() {
        mapper = new ObjectMapper();
        reloadConfiguration();
    }

    public void reloadConfiguration() {
        String acr = SuperGluuExtension.ACR;

        props = persistenceService.getCustScriptConfigProperties(acr);
        if (props == null) {
            logger.warn("Config. properties for custom script '{}' could not be read. Features related to {} will not be accessible",
                    acr, acr.toUpperCase());
        } else {
            conf = SGConfig.get(props);
            if (conf != null) {
                conf.setAppId(persistenceService.getCustScriptConfigProperties(ConfigurationHandler.DEFAULT_ACR).get("supergluu_app_id"));
                try {
                    logger.info("Super Gluu settings found were: {}", mapper.writeValueAsString(conf));
                } catch (Exception e) {
                    logger.error(e.getMessage(), e);
                }
            }
        }

    }

    public int getDevicesTotal(String userId, boolean active) {
        return getDevicesTotal(conf.getAppId(), userId, active);
    }

    public List<SuperGluuDevice> getDevices(String userId, boolean active) {
        return getSortedDevices(userId, active, conf.getAppId(), SuperGluuDevice.class);
    }

    public SGConfig getConf() {
        return conf;
    }

    /**
     * Builds a string that encodes information in order to display a QR code
     * @param userName Username string
     * @param code An enrollment code associated to the user
     * @param remoteIp An IP address to encode in the request (possibly null)
     * @return A string encoded in JSon format with the information for QR code display
     */
    public String generateRequest(String userName, String code, String remoteIp) {

        logger.info("Beginning registration request with user={}, ip={}", userName, remoteIp);

        Map<String, String> reqAsMap = new HashMap<>();
        reqAsMap.put("username", userName);
        reqAsMap.put("app", conf.getAppId());
        reqAsMap.put("issuer", persistenceService.getIssuerUrl());
        reqAsMap.put("created", LocalDateTime.now().format(DateTimeFormatter.ISO_LOCAL_DATE_TIME));
        reqAsMap.put("enrollment", code);
        reqAsMap.put("method", "enroll");

        if (remoteIp != null) {   //Add  geolocation information only if we have an IP available
            reqAsMap.put("req_ip", remoteIp);

            JsonNode geolocation = getGeoLocation(remoteIp, GEOLOCATION_URL_PATTERN, GEO_REQ_TIMEOUT);
            if (geolocation != null) {
                String reqLocation = Stream.of("country", "regionName", "city").map(key -> geolocation.get(key).asText())
                        .reduce("", (acc, next) -> acc + ", " + next);
                reqAsMap.put("req_loc", reqLocation.substring(2)); //Drop space+comma at the beginning
            }
        }

        String request = null;
        try {
            request = mapper.writeValueAsString(reqAsMap);
            logger.debug("Super Gluu request is {}", request);
        } catch (Exception e) {
            logger.error(e.getMessage(), e);
        }
        return request;

    }

    /**
     * Returns the most recently added (with respect to the timestamp passed) Super Gluu device for the user in question
     * @param userId The identifier (inum) of the user
     * @param time Timestamp (milliseconds from the "epoch")
     * @return A SuperGluuDevice object or null if no device could be found. Device has to have counter=-1 and no displayName yet
     */
    public SuperGluuDevice getLatestSuperGluuDevice(String userId, long time) {

        SuperGluuDevice sg = null;
        try {
            String appId = conf.getAppId();
            sg = getLatestFidoDevice(userId, time, appId, SuperGluuDevice.class);

            logger.trace("getLatestSuperGluuDevice. sg id is {}", sg == null ? -1 : sg.getId());
            if (sg != null && (sg.getNickName() != null || sg.getCounter() >= 0)) {
                sg = null;    //should have no name and counter must be -1
            }
            logger.trace("getLatestSuperGluuDevice. sg is null {}", sg == null);
        } catch (Exception e) {
            logger.error(e.getMessage(), e);
        }
        return sg;

    }
    /**
     * Determines if the device passed is enrolled exactly once or more times
     * @param dev A SuperGluuDevice instance
     * @param userId A reference to a user
     * @return Boolean value indicating whether a device with this device's UUID is enrolled once for some user
     * @throws Exception If the device is not even enrolled
     */
    public boolean isDeviceUnique(SuperGluuDevice dev, String userId) throws Exception {

        boolean unique = false;
        String uiid = dev.getDeviceData().getUuid();
        List<String> uuids = getDevices(userId, true).stream().map(SuperGluuDevice::getDeviceData)
                .map(DeviceData::getUuid).collect(Collectors.toList());

        logger.trace("isSGDeviceUnique. All SG user's devices {}", uuids.toString());
        int size = (int) uuids.stream().filter(uuid -> uuid.equals(uiid)).count();
        if (size == 0) {
            throw new Exception(Labels.getLabel("app.error_uniqueness", new String[] { uiid }));
        } else if (size == 1) {
            unique = true;
        }
        return unique;

    }

    /**
     * Executes a geolocation call the to ip-api.com service
     * @param ip String representing an IP address
     * @param urlPattern
     * @param timeout
     * @return A JsonNode with the respone. Null if there was an error issuing or parsing the contents
     */
    private JsonNode getGeoLocation(String ip, String urlPattern, int timeout) {

        JsonNode node = null;
        try {
            String ipApiResponse = getUrlContents(MessageFormat.format(urlPattern, ip), timeout);
            logger.debug("Response from ip-api.com was: {}", ipApiResponse);

            if (ipApiResponse != null) {
                node = mapper.readTree(ipApiResponse);
                if (!node.get("status").asText().equals("success")) {
                    node = null;
                }
            }
        } catch (Exception e) {
            node = null;
            logger.info("An error occurred determining remote location: {}", e.getMessage());
            logger.error(e.getMessage(), e);
        }
        return node;

    }

    private String getUrlContents(String url, int timeout) throws Exception{
        return getUrlContents(url, Collections.emptyList(), timeout);
    }

    private String getUrlContents(String url, List<NameValuePair> nvPairList, int timeout) throws Exception {

        String contents = null;

        DefaultHttpClient client = new DefaultHttpClient();
        HttpParams params = client.getParams();
        HttpConnectionParams.setConnectionTimeout(params, timeout);
        HttpConnectionParams.setSoTimeout(params, timeout);

        HttpGet httpGet = new HttpGet(url);
        URIBuilder uribe = new URIBuilder(httpGet.getURI());
        nvPairList.forEach(pair -> uribe.addParameter(pair.getName(), pair.getValue()));

        httpGet.setURI(uribe.build());
        httpGet.setHeader("Accept", "application/json");
        HttpResponse response = client.execute(httpGet);
        HttpEntity entity = response.getEntity();

        logger.debug("GET request is {}", httpGet.getURI());
        if (response.getStatusLine().getStatusCode() == HttpStatus.SC_OK) {
            contents = EntityUtils.toString(entity);
        }
        EntityUtils.consume(entity);

        return contents;

    }

}
