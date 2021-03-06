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
 * Comment represents a comment on a commit or issue
 * @export
 * @interface Comment
 */
export interface Comment {
    /**
     * 
     * @type {string}
     * @memberof Comment
     */
    body?: string;
    /**
     * 
     * @type {Date}
     * @memberof Comment
     */
    createdAt?: Date;
    /**
     * 
     * @type {string}
     * @memberof Comment
     */
    htmlUrl?: string;
    /**
     * 
     * @type {number}
     * @memberof Comment
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof Comment
     */
    issueUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof Comment
     */
    originalAuthor?: string;
    /**
     * 
     * @type {number}
     * @memberof Comment
     */
    originalAuthorId?: number;
    /**
     * 
     * @type {string}
     * @memberof Comment
     */
    pullRequestUrl?: string;
    /**
     * 
     * @type {Date}
     * @memberof Comment
     */
    updatedAt?: Date;
    /**
     * 
     * @type {User}
     * @memberof Comment
     */
    user?: User;
}
