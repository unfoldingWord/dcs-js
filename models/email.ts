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
 * Email an email address belonging to a user
 * @export
 * @interface Email
 */
export interface Email {
    /**
     * 
     * @type {string}
     * @memberof Email
     */
    email?: string;
    /**
     * 
     * @type {boolean}
     * @memberof Email
     */
    primary?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Email
     */
    verified?: boolean;
}
