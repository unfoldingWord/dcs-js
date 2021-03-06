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
    content?: string;
    /**
     * 
     * @type {Date}
     * @memberof Reaction
     */
    createdAt?: Date;
    /**
     * 
     * @type {User}
     * @memberof Reaction
     */
    user?: User;
}
