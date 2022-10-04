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
import { CommitMeta } from './commit-meta';
import { CommitUser } from './commit-user';
/**
 * 
 * @export
 * @interface RepoCommit
 */
export interface RepoCommit {
    /**
     * 
     * @type {CommitUser}
     * @memberof RepoCommit
     */
    author?: CommitUser;
    /**
     * 
     * @type {CommitUser}
     * @memberof RepoCommit
     */
    committer?: CommitUser;
    /**
     * 
     * @type {string}
     * @memberof RepoCommit
     */
    message?: string;
    /**
     * 
     * @type {CommitMeta}
     * @memberof RepoCommit
     */
    tree?: CommitMeta;
    /**
     * 
     * @type {string}
     * @memberof RepoCommit
     */
    url?: string;
}