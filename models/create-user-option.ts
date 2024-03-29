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
    'email': string;
    /**
     * 
     * @type {string}
     * @memberof CreateUserOption
     */
    'full_name'?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateUserOption
     */
    'login_name'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof CreateUserOption
     */
    'must_change_password'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof CreateUserOption
     */
    'password': string;
    /**
     * 
     * @type {boolean}
     * @memberof CreateUserOption
     */
    'restricted'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CreateUserOption
     */
    'send_notify'?: boolean;
    /**
     * 
     * @type {number}
     * @memberof CreateUserOption
     */
    'source_id'?: number;
    /**
     * 
     * @type {string}
     * @memberof CreateUserOption
     */
    'username': string;
    /**
     * 
     * @type {string}
     * @memberof CreateUserOption
     */
    'visibility'?: string;
}

