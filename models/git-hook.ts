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
 * GitHook represents a Git repository hook
 * @export
 * @interface GitHook
 */
export interface GitHook {
    /**
     * 
     * @type {string}
     * @memberof GitHook
     */
    'content'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof GitHook
     */
    'is_active'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof GitHook
     */
    'name'?: string;
}

