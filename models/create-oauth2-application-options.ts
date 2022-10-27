/* tslint:disable */
/* eslint-disable */
/**
 * DCS (Gitea) API.
 * This documentation describes the DCS (Gitea) API.
 *
 * The version of the OpenAPI document: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * CreateOAuth2ApplicationOptions holds options to create an oauth2 application
 * @export
 * @interface CreateOAuth2ApplicationOptions
 */
export interface CreateOAuth2ApplicationOptions {
    /**
     * 
     * @type {string}
     * @memberof CreateOAuth2ApplicationOptions
     */
    'name'?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof CreateOAuth2ApplicationOptions
     */
    'redirect_uris'?: Array<string>;
}
