/* tslint:disable */
/* eslint-disable */
/**
 * DCS (Gitea) API.
 * This documentation describes the DCS (Gitea) API.
 *
 * The version of the OpenAPI document: 1.17.3+dcs
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * NodeInfoServices contains the third party sites this server can connect to via their application API
 * @export
 * @interface NodeInfoServices
 */
export interface NodeInfoServices {
    /**
     * 
     * @type {Array<string>}
     * @memberof NodeInfoServices
     */
    'inbound'?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof NodeInfoServices
     */
    'outbound'?: Array<string>;
}

