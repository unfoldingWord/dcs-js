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
import { CommitStatus } from './commit-status';
// May contain unused imports in some cases
// @ts-ignore
import { Repository } from './repository';

/**
 * CombinedStatus holds the combined state of several statuses for a single commit
 * @export
 * @interface CombinedStatus
 */
export interface CombinedStatus {
    /**
     * 
     * @type {string}
     * @memberof CombinedStatus
     */
    'commit_url'?: string;
    /**
     * 
     * @type {Repository}
     * @memberof CombinedStatus
     */
    'repository'?: Repository;
    /**
     * 
     * @type {string}
     * @memberof CombinedStatus
     */
    'sha'?: string;
    /**
     * CommitStatusState holds the state of a CommitStatus It can be \"pending\", \"success\", \"error\", \"failure\", and \"warning\"
     * @type {string}
     * @memberof CombinedStatus
     */
    'state'?: string;
    /**
     * 
     * @type {Array<CommitStatus>}
     * @memberof CombinedStatus
     */
    'statuses'?: Array<CommitStatus>;
    /**
     * 
     * @type {number}
     * @memberof CombinedStatus
     */
    'total_count'?: number;
    /**
     * 
     * @type {string}
     * @memberof CombinedStatus
     */
    'url'?: string;
}

