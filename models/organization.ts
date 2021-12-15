/* tslint:disable */
/* eslint-disable */
/**
 * DCS (Gitea) API.
 * This documentation describes the DCS (Gitea) API.
 *
 * OpenAPI spec version: 1.15.6a+dcs
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/**
 * Organization represents an organization
 * @export
 * @interface Organization
 */
export interface Organization {
    /**
     * 
     * @type {string}
     * @memberof Organization
     */
    avatarUrl?: any;
    /**
     * 
     * @type {string}
     * @memberof Organization
     */
    description?: any;
    /**
     * 
     * @type {string}
     * @memberof Organization
     */
    fullName?: any;
    /**
     * 
     * @type {number}
     * @memberof Organization
     */
    id?: any;
    /**
     * 
     * @type {string}
     * @memberof Organization
     */
    location?: any;
    /**
     * 
     * @type {boolean}
     * @memberof Organization
     */
    repoAdminChangeTeamAccess?: any;
    /**
     * DCS Customizations ***_/
     * @type {Array&lt;string&gt;}
     * @memberof Organization
     */
    repoLanguages?: any;
    /**
     * 
     * @type {Array&lt;string&gt;}
     * @memberof Organization
     */
    repoSubjects?: any;
    /**
     * 
     * @type {string}
     * @memberof Organization
     */
    username?: any;
    /**
     * 
     * @type {string}
     * @memberof Organization
     */
    visibility?: any;
    /**
     * 
     * @type {string}
     * @memberof Organization
     */
    website?: any;
}
