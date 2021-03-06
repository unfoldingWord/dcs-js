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
 * CreateTeamOption options for creating a team
 * @export
 * @interface CreateTeamOption
 */
export interface CreateTeamOption {
    /**
     * 
     * @type {boolean}
     * @memberof CreateTeamOption
     */
    canCreateOrgRepo?: boolean;
    /**
     * 
     * @type {string}
     * @memberof CreateTeamOption
     */
    description?: string;
    /**
     * 
     * @type {boolean}
     * @memberof CreateTeamOption
     */
    includesAllRepositories?: boolean;
    /**
     * 
     * @type {string}
     * @memberof CreateTeamOption
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof CreateTeamOption
     */
    permission?: CreateTeamOptionPermissionEnum;
    /**
     * 
     * @type {Array<string>}
     * @memberof CreateTeamOption
     */
    units?: Array<string>;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof CreateTeamOption
     */
    unitsMap?: { [key: string]: string; };
}

/**
    * @export
    * @enum {string}
    */
export enum CreateTeamOptionPermissionEnum {
    Read = 'read',
    Write = 'write',
    Admin = 'admin'
}

