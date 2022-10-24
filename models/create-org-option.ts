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
 * CreateOrgOption options for creating an organization
 * @export
 * @interface CreateOrgOption
 */
export interface CreateOrgOption {
    /**
     * 
     * @type {string}
     * @memberof CreateOrgOption
     */
    'description'?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateOrgOption
     */
    'full_name'?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateOrgOption
     */
    'location'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof CreateOrgOption
     */
    'repo_admin_change_team_access'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof CreateOrgOption
     */
    'username': string;
    /**
     * possible values are `public` (default), `limited` or `private`
     * @type {string}
     * @memberof CreateOrgOption
     */
    'visibility'?: CreateOrgOptionVisibilityEnum;
    /**
     * 
     * @type {string}
     * @memberof CreateOrgOption
     */
    'website'?: string;
}

export const CreateOrgOptionVisibilityEnum = {
    Public: 'public',
    Limited: 'limited',
    Private: 'private'
} as const;

export type CreateOrgOptionVisibilityEnum = typeof CreateOrgOptionVisibilityEnum[keyof typeof CreateOrgOptionVisibilityEnum];


