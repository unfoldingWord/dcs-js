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
import { CommitAffectedFiles } from './commit-affected-files';
// May contain unused imports in some cases
// @ts-ignore
import { CommitMeta } from './commit-meta';
// May contain unused imports in some cases
// @ts-ignore
import { RepoCommit } from './repo-commit';
// May contain unused imports in some cases
// @ts-ignore
import { User } from './user';

/**
 * 
 * @export
 * @interface Commit
 */
export interface Commit {
    /**
     * 
     * @type {User}
     * @memberof Commit
     */
    'author'?: User;
    /**
     * 
     * @type {RepoCommit}
     * @memberof Commit
     */
    'commit'?: RepoCommit;
    /**
     * 
     * @type {User}
     * @memberof Commit
     */
    'committer'?: User;
    /**
     * 
     * @type {string}
     * @memberof Commit
     */
    'created'?: string;
    /**
     * 
     * @type {Array<CommitAffectedFiles>}
     * @memberof Commit
     */
    'files'?: Array<CommitAffectedFiles>;
    /**
     * 
     * @type {string}
     * @memberof Commit
     */
    'html_url'?: string;
    /**
     * 
     * @type {Array<CommitMeta>}
     * @memberof Commit
     */
    'parents'?: Array<CommitMeta>;
    /**
     * 
     * @type {string}
     * @memberof Commit
     */
    'sha'?: string;
    /**
     * 
     * @type {string}
     * @memberof Commit
     */
    'url'?: string;
}

