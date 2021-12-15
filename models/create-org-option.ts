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
    description?: any;
    /**
     * 
     * @type {string}
     * @memberof CreateOrgOption
     */
    fullName?: any;
    /**
     * 
     * @type {string}
     * @memberof CreateOrgOption
     */
    location?: any;
    /**
     * 
     * @type {boolean}
     * @memberof CreateOrgOption
     */
    repoAdminChangeTeamAccess?: any;
    /**
     * 
     * @type {string}
     * @memberof CreateOrgOption
     */
    username: any;
    /**
     * possible values are `public` (default), `limited` or `private`
     * @type {string}
     * @memberof CreateOrgOption
     */
    visibility?: CreateOrgOptionVisibilityEnum;
    /**
     * 
     * @type {string}
     * @memberof CreateOrgOption
     */
    website?: any;
}

/**
    * @export
    * @enum {string}
    */
export enum CreateOrgOptionVisibilityEnum {
    Public = 'public',
    Limited = 'limited',
    Private = 'private'
}

