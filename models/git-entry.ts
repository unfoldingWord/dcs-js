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
 * GitEntry represents a git tree
 * @export
 * @interface GitEntry
 */
export interface GitEntry {
    /**
     * 
     * @type {string}
     * @memberof GitEntry
     */
    'mode'?: string;
    /**
     * 
     * @type {string}
     * @memberof GitEntry
     */
    'path'?: string;
    /**
     * 
     * @type {string}
     * @memberof GitEntry
     */
    'sha'?: string;
    /**
     * 
     * @type {number}
     * @memberof GitEntry
     */
    'size'?: number;
    /**
     * 
     * @type {string}
     * @memberof GitEntry
     */
    'type'?: string;
    /**
     * 
     * @type {string}
     * @memberof GitEntry
     */
    'url'?: string;
}

