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
import { CommitDateOptions } from './commit-date-options';
// May contain unused imports in some cases
// @ts-ignore
import { Identity } from './identity';

/**
 * DeleteFileOptions options for deleting files (used for other File structs below) Note: `author` and `committer` are optional (if only one is given, it will be used for the other, otherwise the authenticated user will be used)
 * @export
 * @interface DeleteFileOptions
 */
export interface DeleteFileOptions {
    /**
     * 
     * @type {Identity}
     * @memberof DeleteFileOptions
     */
    'author'?: Identity;
    /**
     * branch (optional) to base this file from. if not given, the default branch is used
     * @type {string}
     * @memberof DeleteFileOptions
     */
    'branch'?: string;
    /**
     * 
     * @type {Identity}
     * @memberof DeleteFileOptions
     */
    'committer'?: Identity;
    /**
     * 
     * @type {CommitDateOptions}
     * @memberof DeleteFileOptions
     */
    'dates'?: CommitDateOptions;
    /**
     * message (optional) for the commit of this file. if not supplied, a default message will be used
     * @type {string}
     * @memberof DeleteFileOptions
     */
    'message'?: string;
    /**
     * new_branch (optional) will make a new branch from `branch` before creating the file
     * @type {string}
     * @memberof DeleteFileOptions
     */
    'new_branch'?: string;
    /**
     * sha is the SHA for the file that already exists
     * @type {string}
     * @memberof DeleteFileOptions
     */
    'sha': string;
    /**
     * Add a Signed-off-by trailer by the committer at the end of the commit log message.
     * @type {boolean}
     * @memberof DeleteFileOptions
     */
    'signoff'?: boolean;
}

