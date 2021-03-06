/* tslint:disable */
/* eslint-disable */
/**
 * DCS (Gitea) API.
 * This documentation describes the DCS (Gitea) API.
 *
 * OpenAPI spec version: 1.16.7+dcs
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
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
    httpGitDisabled?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof GeneralRepoSettings
     */
    lfsDisabled?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof GeneralRepoSettings
     */
    migrationsDisabled?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof GeneralRepoSettings
     */
    mirrorsDisabled?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof GeneralRepoSettings
     */
    starsDisabled?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof GeneralRepoSettings
     */
    timeTrackingDisabled?: boolean;
}
