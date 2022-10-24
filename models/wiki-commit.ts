/* tslint:disable */
/* eslint-disable */
/**
 * DCS (Gitea) API.
 * This documentation describes the DCS (Gitea) API.
 *
 * The version of the OpenAPI document: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import { CommitUser } from './commit-user';

/**
 * WikiCommit page commit/revision
 * @export
 * @interface WikiCommit
 */
export interface WikiCommit {
    /**
     * 
     * @type {CommitUser}
     * @memberof WikiCommit
     */
    'author'?: CommitUser;
    /**
     * 
     * @type {CommitUser}
     * @memberof WikiCommit
     */
    'commiter'?: CommitUser;
    /**
     * 
     * @type {string}
     * @memberof WikiCommit
     */
    'message'?: string;
    /**
     * 
     * @type {string}
     * @memberof WikiCommit
     */
    'sha'?: string;
}
