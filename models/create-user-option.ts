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
 * CreateUserOption create user options
 * @export
 * @interface CreateUserOption
 */
export interface CreateUserOption {
    /**
     * 
     * @type {string}
     * @memberof CreateUserOption
     */
    email: string;
    /**
     * 
     * @type {string}
     * @memberof CreateUserOption
     */
    fullName?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateUserOption
     */
    loginName?: string;
    /**
     * 
     * @type {boolean}
     * @memberof CreateUserOption
     */
    mustChangePassword?: boolean;
    /**
     * 
     * @type {string}
     * @memberof CreateUserOption
     */
    password: string;
    /**
     * 
     * @type {boolean}
     * @memberof CreateUserOption
     */
    restricted?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CreateUserOption
     */
    sendNotify?: boolean;
    /**
     * 
     * @type {number}
     * @memberof CreateUserOption
     */
    sourceId?: number;
    /**
     * 
     * @type {string}
     * @memberof CreateUserOption
     */
    username: string;
    /**
     * 
     * @type {string}
     * @memberof CreateUserOption
     */
    visibility?: string;
}
