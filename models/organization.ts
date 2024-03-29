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
    'avatar_url'?: string;
    /**
     * 
     * @type {string}
     * @memberof Organization
     */
    'description'?: string;
    /**
     * 
     * @type {string}
     * @memberof Organization
     */
    'full_name'?: string;
    /**
     * 
     * @type {number}
     * @memberof Organization
     */
    'id'?: number;
    /**
     * 
     * @type {string}
     * @memberof Organization
     */
    'location'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof Organization
     */
    'repo_admin_change_team_access'?: boolean;
    /**
     * All languages of the repos the org owns
     * @type {Array<string>}
     * @memberof Organization
     */
    'repo_languages'?: Array<string>;
    /**
     * All subjects of the repos the org owns
     * @type {Array<string>}
     * @memberof Organization
     */
    'repo_subjects'?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof Organization
     */
    'username'?: string;
    /**
     * 
     * @type {string}
     * @memberof Organization
     */
    'visibility'?: string;
    /**
     * 
     * @type {string}
     * @memberof Organization
     */
    'website'?: string;
}

