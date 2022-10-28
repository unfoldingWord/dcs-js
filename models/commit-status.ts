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
 * CommitStatus holds a single status of a single Commit
 * @export
 * @interface CommitStatus
 */
export interface CommitStatus {
    /**
     * 
     * @type {string}
     * @memberof CommitStatus
     */
    'context'?: string;
    /**
     * 
     * @type {string}
     * @memberof CommitStatus
     */
    'created_at'?: string;
    /**
     * 
     * @type {User}
     * @memberof CommitStatus
     */
    'creator'?: User;
    /**
     * 
     * @type {string}
     * @memberof CommitStatus
     */
    'description'?: string;
    /**
     * 
     * @type {number}
     * @memberof CommitStatus
     */
    'id'?: number;
    /**
     * CommitStatusState holds the state of a CommitStatus It can be \"pending\", \"success\", \"error\", \"failure\", and \"warning\"
     * @type {string}
     * @memberof CommitStatus
     */
    'status'?: string;
    /**
     * 
     * @type {string}
     * @memberof CommitStatus
     */
    'target_url'?: string;
    /**
     * 
     * @type {string}
     * @memberof CommitStatus
     */
    'updated_at'?: string;
    /**
     * 
     * @type {string}
     * @memberof CommitStatus
     */
    'url'?: string;
}

