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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.JansConfigApi);
  }
}(this, function(expect, JansConfigApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new JansConfigApi.Client();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('Client', function() {
    it('should create an instance of Client', function() {
      // uncomment below and update the code to test Client
      //var instane = new JansConfigApi.Client();
      //expect(instance).to.be.a(JansConfigApi.Client);
    });

    it('should have the property dn (base name: "dn")', function() {
      // uncomment below and update the code to test the property dn
      //var instane = new JansConfigApi.Client();
      //expect(instance).to.be();
    });

    it('should have the property inum (base name: "inum")', function() {
      // uncomment below and update the code to test the property inum
      //var instane = new JansConfigApi.Client();
      //expect(instance).to.be();
    });

    it('should have the property clientSecret (base name: "clientSecret")', function() {
      // uncomment below and update the code to test the property clientSecret
      //var instane = new JansConfigApi.Client();
      //expect(instance).to.be();
    });

    it('should have the property frontChannelLogoutUri (base name: "frontChannelLogoutUri")', function() {
      // uncomment below and update the code to test the property frontChannelLogoutUri
      //var instane = new JansConfigApi.Client();
      //expect(instance).to.be();
    });

    it('should have the property frontChannelLogoutSessionRequired (base name: "frontChannelLogoutSessionRequired")', function() {
      // uncomment below and update the code to test the property frontChannelLogoutSessionRequired
      //var instane = new JansConfigApi.Client();
      //expect(instance).to.be();
    });

    it('should have the property registrationAccessToken (base name: "registrationAccessToken")', function() {
      // uncomment below and update the code to test the property registrationAccessToken
      //var instane = new JansConfigApi.Client();
      //expect(instance).to.be();
    });

    it('should have the property clientIdIssuedAt (base name: "clientIdIssuedAt")', function() {
      // uncomment below and update the code to test the property clientIdIssuedAt
      //var instane = new JansConfigApi.Client();
      //expect(instance).to.be();
    });

    it('should have the property clientSecretExpiresAt (base name: "clientSecretExpiresAt")', function() {
      // uncomment below and update the code to test the property clientSecretExpiresAt
      //var instane = new JansConfigApi.Client();
      //expect(instance).to.be();
    });

    it('should have the property redirectUris (base name: "redirectUris")', function() {
      // uncomment below and update the code to test the property redirectUris
      //var instane = new JansConfigApi.Client();
      //expect(instance).to.be();
    });

    it('should have the property claimRedirectUris (base name: "claimRedirectUris")', function() {
      // uncomment below and update the code to test the property claimRedirectUris
      //var instane = new JansConfigApi.Client();
      //expect(instance).to.be();
    });

    it('should have the property responseTypes (base name: "responseTypes")', function() {
      // uncomment below and update the code to test the property responseTypes
      //var instane = new JansConfigApi.Client();
      //expect(instance).to.be();
    });

    it('should have the property grantTypes (base name: "grantTypes")', function() {
      // uncomment below and update the code to test the property grantTypes
      //var instane = new JansConfigApi.Client();
      //expect(instance).to.be();
    });

    it('should have the property applicationType (base name: "applicationType")', function() {
      // uncomment below and update the code to test the property applicationType
      //var instane = new JansConfigApi.Client();
      //expect(instance).to.be();
    });

    it('should have the property contacts (base name: "contacts")', function() {
      // uncomment below and update the code to test the property contacts
      //var instane = new JansConfigApi.Client();
      //expect(instance).to.be();
    });

    it('should have the property clientName (base name: "clientName")', function() {
      // uncomment below and update the code to test the property clientName
      //var instane = new JansConfigApi.Client();
      //expect(instance).to.be();
    });

    it('should have the property idTokenTokenBindingCnf (base name: "idTokenTokenBindingCnf")', function() {
      // uncomment below and update the code to test the property idTokenTokenBindingCnf
      //var instane = new JansConfigApi.Client();
      //expect(instance).to.be();
    });

    it('should have the property logoUri (base name: "logoUri")', function() {
      // uncomment below and update the code to test the property logoUri
      //var instane = new JansConfigApi.Client();
      //expect(instance).to.be();
    });

    it('should have the property clientUri (base name: "clientUri")', function() {
      // uncomment below and update the code to test the property clientUri
      //var instane = new JansConfigApi.Client();
      //expect(instance).to.be();
    });

    it('should have the property policyUri (base name: "policyUri")', function() {
      // uncomment below and update the code to test the property policyUri
      //var instane = new JansConfigApi.Client();
      //expect(instance).to.be();
    });

    it('should have the property tosUri (base name: "tosUri")', function() {
      // uncomment below and update the code to test the property tosUri
      //var instane = new JansConfigApi.Client();
      //expect(instance).to.be();
    });

    it('should have the property jwksUri (base name: "jwksUri")', function() {
      // uncomment below and update the code to test the property jwksUri
      //var instane = new JansConfigApi.Client();
      //expect(instance).to.be();
    });

    it('should have the property jwks (base name: "jwks")', function() {
      // uncomment below and update the code to test the property jwks
      //var instane = new JansConfigApi.Client();
      //expect(instance).to.be();
    });

    it('should have the property sectorIdentifierUri (base name: "sectorIdentifierUri")', function() {
      // uncomment below and update the code to test the property sectorIdentifierUri
      //var instane = new JansConfigApi.Client();
      //expect(instance).to.be();
    });

    it('should have the property subjectType (base name: "subjectType")', function() {
      // uncomment below and update the code to test the property subjectType
      //var instane = new JansConfigApi.Client();
      //expect(instance).to.be();
    });

    it('should have the property idTokenSignedResponseAlg (base name: "idTokenSignedResponseAlg")', function() {
      // uncomment below and update the code to test the property idTokenSignedResponseAlg
      //var instane = new JansConfigApi.Client();
      //expect(instance).to.be();
    });

    it('should have the property idTokenEncryptedResponseAlg (base name: "idTokenEncryptedResponseAlg")', function() {
      // uncomment below and update the code to test the property idTokenEncryptedResponseAlg
      //var instane = new JansConfigApi.Client();
      //expect(instance).to.be();
    });

    it('should have the property idTokenEncryptedResponseEnc (base name: "idTokenEncryptedResponseEnc")', function() {
      // uncomment below and update the code to test the property idTokenEncryptedResponseEnc
      //var instane = new JansConfigApi.Client();
      //expect(instance).to.be();
    });

    it('should have the property userInfoSignedResponseAlg (base name: "userInfoSignedResponseAlg")', function() {
      // uncomment below and update the code to test the property userInfoSignedResponseAlg
      //var instane = new JansConfigApi.Client();
      //expect(instance).to.be();
    });

    it('should have the property userInfoEncryptedResponseAlg (base name: "userInfoEncryptedResponseAlg")', function() {
      // uncomment below and update the code to test the property userInfoEncryptedResponseAlg
      //var instane = new JansConfigApi.Client();
      //expect(instance).to.be();
    });

    it('should have the property userInfoEncryptedResponseEnc (base name: "userInfoEncryptedResponseEnc")', function() {
      // uncomment below and update the code to test the property userInfoEncryptedResponseEnc
      //var instane = new JansConfigApi.Client();
      //expect(instance).to.be();
    });

    it('should have the property requestObjectSigningAlg (base name: "requestObjectSigningAlg")', function() {
      // uncomment below and update the code to test the property requestObjectSigningAlg
      //var instane = new JansConfigApi.Client();
      //expect(instance).to.be();
    });

    it('should have the property requestObjectEncryptionAlg (base name: "requestObjectEncryptionAlg")', function() {
      // uncomment below and update the code to test the property requestObjectEncryptionAlg
      //var instane = new JansConfigApi.Client();
      //expect(instance).to.be();
    });

    it('should have the property requestObjectEncryptionEnc (base name: "requestObjectEncryptionEnc")', function() {
      // uncomment below and update the code to test the property requestObjectEncryptionEnc
      //var instane = new JansConfigApi.Client();
      //expect(instance).to.be();
    });

    it('should have the property tokenEndpointAuthMethod (base name: "tokenEndpointAuthMethod")', function() {
      // uncomment below and update the code to test the property tokenEndpointAuthMethod
      //var instane = new JansConfigApi.Client();
      //expect(instance).to.be();
    });

    it('should have the property tokenEndpointAuthSigningAlg (base name: "tokenEndpointAuthSigningAlg")', function() {
      // uncomment below and update the code to test the property tokenEndpointAuthSigningAlg
      //var instane = new JansConfigApi.Client();
      //expect(instance).to.be();
    });

    it('should have the property defaultMaxAge (base name: "defaultMaxAge")', function() {
      // uncomment below and update the code to test the property defaultMaxAge
      //var instane = new JansConfigApi.Client();
      //expect(instance).to.be();
    });

    it('should have the property requireAuthTime (base name: "requireAuthTime")', function() {
      // uncomment below and update the code to test the property requireAuthTime
      //var instane = new JansConfigApi.Client();
      //expect(instance).to.be();
    });

    it('should have the property defaultAcrValues (base name: "defaultAcrValues")', function() {
      // uncomment below and update the code to test the property defaultAcrValues
      //var instane = new JansConfigApi.Client();
      //expect(instance).to.be();
    });

    it('should have the property initiateLoginUri (base name: "initiateLoginUri")', function() {
      // uncomment below and update the code to test the property initiateLoginUri
      //var instane = new JansConfigApi.Client();
      //expect(instance).to.be();
    });

    it('should have the property postLogoutRedirectUris (base name: "postLogoutRedirectUris")', function() {
      // uncomment below and update the code to test the property postLogoutRedirectUris
      //var instane = new JansConfigApi.Client();
      //expect(instance).to.be();
    });

    it('should have the property requestUris (base name: "requestUris")', function() {
      // uncomment below and update the code to test the property requestUris
      //var instane = new JansConfigApi.Client();
      //expect(instance).to.be();
    });

    it('should have the property scopes (base name: "scopes")', function() {
      // uncomment below and update the code to test the property scopes
      //var instane = new JansConfigApi.Client();
      //expect(instance).to.be();
    });

    it('should have the property claims (base name: "claims")', function() {
      // uncomment below and update the code to test the property claims
      //var instane = new JansConfigApi.Client();
      //expect(instance).to.be();
    });

    it('should have the property trustedClient (base name: "trustedClient")', function() {
      // uncomment below and update the code to test the property trustedClient
      //var instane = new JansConfigApi.Client();
      //expect(instance).to.be();
    });

    it('should have the property lastAccessTime (base name: "lastAccessTime")', function() {
      // uncomment below and update the code to test the property lastAccessTime
      //var instane = new JansConfigApi.Client();
      //expect(instance).to.be();
    });

    it('should have the property lastLogonTime (base name: "lastLogonTime")', function() {
      // uncomment below and update the code to test the property lastLogonTime
      //var instane = new JansConfigApi.Client();
      //expect(instance).to.be();
    });

    it('should have the property persistClientAuthorizations (base name: "persistClientAuthorizations")', function() {
      // uncomment below and update the code to test the property persistClientAuthorizations
      //var instane = new JansConfigApi.Client();
      //expect(instance).to.be();
    });

    it('should have the property includeClaimsInIdToken (base name: "includeClaimsInIdToken")', function() {
      // uncomment below and update the code to test the property includeClaimsInIdToken
      //var instane = new JansConfigApi.Client();
      //expect(instance).to.be();
    });

    it('should have the property refreshTokenLifetime (base name: "refreshTokenLifetime")', function() {
      // uncomment below and update the code to test the property refreshTokenLifetime
      //var instane = new JansConfigApi.Client();
      //expect(instance).to.be();
    });

    it('should have the property accessTokenLifetime (base name: "accessTokenLifetime")', function() {
      // uncomment below and update the code to test the property accessTokenLifetime
      //var instane = new JansConfigApi.Client();
      //expect(instance).to.be();
    });

    it('should have the property customAttributes (base name: "customAttributes")', function() {
      // uncomment below and update the code to test the property customAttributes
      //var instane = new JansConfigApi.Client();
      //expect(instance).to.be();
    });

    it('should have the property customObjectClasses (base name: "customObjectClasses")', function() {
      // uncomment below and update the code to test the property customObjectClasses
      //var instane = new JansConfigApi.Client();
      //expect(instance).to.be();
    });

    it('should have the property rptAsJwt (base name: "rptAsJwt")', function() {
      // uncomment below and update the code to test the property rptAsJwt
      //var instane = new JansConfigApi.Client();
      //expect(instance).to.be();
    });

    it('should have the property accessTokenAsJwt (base name: "accessTokenAsJwt")', function() {
      // uncomment below and update the code to test the property accessTokenAsJwt
      //var instane = new JansConfigApi.Client();
      //expect(instance).to.be();
    });

    it('should have the property accessTokenSigningAlg (base name: "accessTokenSigningAlg")', function() {
      // uncomment below and update the code to test the property accessTokenSigningAlg
      //var instane = new JansConfigApi.Client();
      //expect(instance).to.be();
    });

    it('should have the property disabled (base name: "disabled")', function() {
      // uncomment below and update the code to test the property disabled
      //var instane = new JansConfigApi.Client();
      //expect(instance).to.be();
    });

    it('should have the property authorizedOrigins (base name: "authorizedOrigins")', function() {
      // uncomment below and update the code to test the property authorizedOrigins
      //var instane = new JansConfigApi.Client();
      //expect(instance).to.be();
    });

    it('should have the property softwareId (base name: "softwareId")', function() {
      // uncomment below and update the code to test the property softwareId
      //var instane = new JansConfigApi.Client();
      //expect(instance).to.be();
    });

    it('should have the property softwareVersion (base name: "softwareVersion")', function() {
      // uncomment below and update the code to test the property softwareVersion
      //var instane = new JansConfigApi.Client();
      //expect(instance).to.be();
    });

    it('should have the property softwareStatement (base name: "softwareStatement")', function() {
      // uncomment below and update the code to test the property softwareStatement
      //var instane = new JansConfigApi.Client();
      //expect(instance).to.be();
    });

    it('should have the property attributes (base name: "attributes")', function() {
      // uncomment below and update the code to test the property attributes
      //var instane = new JansConfigApi.Client();
      //expect(instance).to.be();
    });

    it('should have the property backchannelTokenDeliveryMode (base name: "backchannelTokenDeliveryMode")', function() {
      // uncomment below and update the code to test the property backchannelTokenDeliveryMode
      //var instane = new JansConfigApi.Client();
      //expect(instance).to.be();
    });

    it('should have the property backchannelClientNotificationEndpoint (base name: "backchannelClientNotificationEndpoint")', function() {
      // uncomment below and update the code to test the property backchannelClientNotificationEndpoint
      //var instane = new JansConfigApi.Client();
      //expect(instance).to.be();
    });

    it('should have the property backchannelAuthenticationRequestSigningAlg (base name: "backchannelAuthenticationRequestSigningAlg")', function() {
      // uncomment below and update the code to test the property backchannelAuthenticationRequestSigningAlg
      //var instane = new JansConfigApi.Client();
      //expect(instance).to.be();
    });

    it('should have the property backchannelUserCodeParameter (base name: "backchannelUserCodeParameter")', function() {
      // uncomment below and update the code to test the property backchannelUserCodeParameter
      //var instane = new JansConfigApi.Client();
      //expect(instance).to.be();
    });

    it('should have the property exp (base name: "exp")', function() {
      // uncomment below and update the code to test the property exp
      //var instane = new JansConfigApi.Client();
      //expect(instance).to.be();
    });

    it('should have the property deletable (base name: "deletable")', function() {
      // uncomment below and update the code to test the property deletable
      //var instane = new JansConfigApi.Client();
      //expect(instance).to.be();
    });

    it('should have the property jansId (base name: "jansId")', function() {
      // uncomment below and update the code to test the property jansId
      //var instane = new JansConfigApi.Client();
      //expect(instance).to.be();
    });

  });

}));
