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


// May contain unused imports in some cases
// @ts-ignore
import { User } from './user';

/**
 * Reaction contain one reaction
 * @export
 * @interface Reaction
 */
export interface Reaction {
    /**
     * 
     * @type {string}
     * @memberof Reaction
     */
    'content'?: string;
    /**
     * 
     * @type {string}
     * @memberof Reaction
     */
    'created_at'?: string;
    /**
     * 
     * @type {User}
     * @memberof Reaction
     */
    'user'?: User;
}

