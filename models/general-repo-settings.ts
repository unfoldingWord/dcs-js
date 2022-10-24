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
 * GeneralRepoSettings contains global repository settings exposed by API
 * @export
 * @interface GeneralRepoSettings
 */
export interface GeneralRepoSettings {
    /**
     * 
     * @type {boolean}
     * @memberof GeneralRepoSettings
     */
    'http_git_disabled'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof GeneralRepoSettings
     */
    'lfs_disabled'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof GeneralRepoSettings
     */
    'migrations_disabled'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof GeneralRepoSettings
     */
    'mirrors_disabled'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof GeneralRepoSettings
     */
    'stars_disabled'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof GeneralRepoSettings
     */
    'time_tracking_disabled'?: boolean;
}
