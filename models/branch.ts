/* tslint:disable */
/* eslint-disable */
/**
 * DCS (Gitea) API.
 * This documentation describes the DCS (Gitea) API.
 *
 * The version of the OpenAPI document: 1.17.4+dcs
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import { PayloadCommit } from './payload-commit';

/**
 * Branch represents a repository branch
 * @export
 * @interface Branch
 */
export interface Branch {
    /**
     * 
     * @type {PayloadCommit}
     * @memberof Branch
     */
    'commit'?: PayloadCommit;
    /**
     * 
     * @type {string}
     * @memberof Branch
     */
    'effective_branch_protection_name'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof Branch
     */
    'enable_status_check'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof Branch
     */
    'name'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof Branch
     */
    'protected'?: boolean;
    /**
     * 
     * @type {number}
     * @memberof Branch
     */
    'required_approvals'?: number;
    /**
     * 
     * @type {Array<string>}
     * @memberof Branch
     */
    'status_check_contexts'?: Array<string>;
    /**
     * 
     * @type {boolean}
     * @memberof Branch
     */
    'user_can_merge'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Branch
     */
    'user_can_push'?: boolean;
}

