/**
 * jans-config-api
 * jans-config-api - Authorization services
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: xxx@gluu.org
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import RequestedParties from './RequestedParties';

/**
 * The Fido2Configuration model module.
 * @module model/Fido2Configuration
 * @version 1.0.0
 */
class Fido2Configuration {
    /**
     * Constructs a new <code>Fido2Configuration</code>.
     * Fido2 configuration properties.
     * @alias module:model/Fido2Configuration
     */
    constructor() { 
        
        Fido2Configuration.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Fido2Configuration</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Fido2Configuration} obj Optional instance to populate.
     * @return {module:model/Fido2Configuration} The populated <code>Fido2Configuration</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Fido2Configuration();

            if (data.hasOwnProperty('authenticatorCertsFolder')) {
                obj['authenticatorCertsFolder'] = ApiClient.convertToType(data['authenticatorCertsFolder'], 'String');
            }
            if (data.hasOwnProperty('mdsCertsFolder')) {
                obj['mdsCertsFolder'] = ApiClient.convertToType(data['mdsCertsFolder'], 'String');
            }
            if (data.hasOwnProperty('mdsTocsFolder')) {
                obj['mdsTocsFolder'] = ApiClient.convertToType(data['mdsTocsFolder'], 'String');
            }
            if (data.hasOwnProperty('serverMetadataFolder')) {
                obj['serverMetadataFolder'] = ApiClient.convertToType(data['serverMetadataFolder'], 'String');
            }
            if (data.hasOwnProperty('requestedParties')) {
                obj['requestedParties'] = ApiClient.convertToType(data['requestedParties'], [RequestedParties]);
            }
            if (data.hasOwnProperty('userAutoEnrollment')) {
                obj['userAutoEnrollment'] = ApiClient.convertToType(data['userAutoEnrollment'], 'Boolean');
            }
            if (data.hasOwnProperty('unfinishedRequestExpiration')) {
                obj['unfinishedRequestExpiration'] = ApiClient.convertToType(data['unfinishedRequestExpiration'], 'Number');
            }
            if (data.hasOwnProperty('authenticationHistoryExpiration')) {
                obj['authenticationHistoryExpiration'] = ApiClient.convertToType(data['authenticationHistoryExpiration'], 'Number');
            }
            if (data.hasOwnProperty('requestedCredentialTypes')) {
                obj['requestedCredentialTypes'] = ApiClient.convertToType(data['requestedCredentialTypes'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * Authenticators certificates fodler.
 * @member {String} authenticatorCertsFolder
 */
Fido2Configuration.prototype['authenticatorCertsFolder'] = undefined;

/**
 * MDS TOC root certificates folder.
 * @member {String} mdsCertsFolder
 */
Fido2Configuration.prototype['mdsCertsFolder'] = undefined;

/**
 * MDS TOC files folder.
 * @member {String} mdsTocsFolder
 */
Fido2Configuration.prototype['mdsTocsFolder'] = undefined;

/**
 * Authenticators metadata in json format.
 * @member {String} serverMetadataFolder
 */
Fido2Configuration.prototype['serverMetadataFolder'] = undefined;

/**
 * Authenticators metadata in json format.
 * @member {Array.<module:model/RequestedParties>} requestedParties
 */
Fido2Configuration.prototype['requestedParties'] = undefined;

/**
 * Allow to enroll users on enrollment/authentication requests.
 * @member {Boolean} userAutoEnrollment
 */
Fido2Configuration.prototype['userAutoEnrollment'] = undefined;

/**
 * Expiration time in seconds for pending enrollment/authentication requests
 * @member {Number} unfinishedRequestExpiration
 */
Fido2Configuration.prototype['unfinishedRequestExpiration'] = undefined;

/**
 * Expiration time in seconds for approved authentication requests.
 * @member {Number} authenticationHistoryExpiration
 */
Fido2Configuration.prototype['authenticationHistoryExpiration'] = undefined;

/**
 * List of Requested Credential Types.
 * @member {Array.<String>} requestedCredentialTypes
 */
Fido2Configuration.prototype['requestedCredentialTypes'] = undefined;






export default Fido2Configuration;

