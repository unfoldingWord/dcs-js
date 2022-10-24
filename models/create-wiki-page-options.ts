/* tslint:disable */
/* eslint-disable */
/**
 * DCS (Gitea) API.
 * This documentation describes the DCS (Gitea) API.
 *
 * The version of the OpenAPI document: 1.17.3+1682-g5f768e5ff
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * CreateWikiPageOptions form for creating wiki
 * @export
 * @interface CreateWikiPageOptions
 */
export interface CreateWikiPageOptions {
    /**
     * content must be base64 encoded
     * @type {string}
     * @memberof CreateWikiPageOptions
     */
    'content_base64'?: string;
    /**
     * optional commit message summarizing the change
     * @type {string}
     * @memberof CreateWikiPageOptions
     */
    'message'?: string;
    /**
     * page title. leave empty to keep unchanged
     * @type {string}
     * @memberof CreateWikiPageOptions
     */
    'title'?: string;
}

