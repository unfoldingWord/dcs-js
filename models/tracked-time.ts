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


// May contain unused imports in some cases
// @ts-ignore
import { Issue } from './issue';

/**
 * TrackedTime worked time for an issue / pr
 * @export
 * @interface TrackedTime
 */
export interface TrackedTime {
    /**
     * 
     * @type {string}
     * @memberof TrackedTime
     */
    'created'?: string;
    /**
     * 
     * @type {number}
     * @memberof TrackedTime
     */
    'id'?: number;
    /**
     * 
     * @type {Issue}
     * @memberof TrackedTime
     */
    'issue'?: Issue;
    /**
     * deprecated (only for backwards compatibility)
     * @type {number}
     * @memberof TrackedTime
     */
    'issue_id'?: number;
    /**
     * Time in seconds
     * @type {number}
     * @memberof TrackedTime
     */
    'time'?: number;
    /**
     * deprecated (only for backwards compatibility)
     * @type {number}
     * @memberof TrackedTime
     */
    'user_id'?: number;
    /**
     * 
     * @type {string}
     * @memberof TrackedTime
     */
    'user_name'?: string;
}

