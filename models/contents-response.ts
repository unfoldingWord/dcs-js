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
import { FileLinksResponse } from './file-links-response';

/**
 * ContentsResponse contains information about a repo\'s entry\'s (dir, file, symlink, submodule) metadata and content
 * @export
 * @interface ContentsResponse
 */
export interface ContentsResponse {
    /**
     * 
     * @type {FileLinksResponse}
     * @memberof ContentsResponse
     */
    '_links'?: FileLinksResponse;
    /**
     * `content` is populated when `type` is `file`, otherwise null
     * @type {string}
     * @memberof ContentsResponse
     */
    'content'?: string;
    /**
     * 
     * @type {string}
     * @memberof ContentsResponse
     */
    'download_url'?: string;
    /**
     * `encoding` is populated when `type` is `file`, otherwise null
     * @type {string}
     * @memberof ContentsResponse
     */
    'encoding'?: string;
    /**
     * 
     * @type {string}
     * @memberof ContentsResponse
     */
    'git_url'?: string;
    /**
     * 
     * @type {string}
     * @memberof ContentsResponse
     */
    'html_url'?: string;
    /**
     * 
     * @type {string}
     * @memberof ContentsResponse
     */
    'name'?: string;
    /**
     * 
     * @type {string}
     * @memberof ContentsResponse
     */
    'path'?: string;
    /**
     * 
     * @type {string}
     * @memberof ContentsResponse
     */
    'sha'?: string;
    /**
     * 
     * @type {number}
     * @memberof ContentsResponse
     */
    'size'?: number;
    /**
     * `submodule_git_url` is populated when `type` is `submodule`, otherwise null
     * @type {string}
     * @memberof ContentsResponse
     */
    'submodule_git_url'?: string;
    /**
     * `target` is populated when `type` is `symlink`, otherwise null
     * @type {string}
     * @memberof ContentsResponse
     */
    'target'?: string;
    /**
     * `type` will be `file`, `dir`, `symlink`, or `submodule`
     * @type {string}
     * @memberof ContentsResponse
     */
    'type'?: string;
    /**
     * 
     * @type {string}
     * @memberof ContentsResponse
     */
    'url'?: string;
}

