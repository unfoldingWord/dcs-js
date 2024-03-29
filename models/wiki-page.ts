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
import { WikiCommit } from './wiki-commit';

/**
 * WikiPage a wiki page
 * @export
 * @interface WikiPage
 */
export interface WikiPage {
    /**
     * 
     * @type {number}
     * @memberof WikiPage
     */
    'commit_count'?: number;
    /**
     * Page content, base64 encoded
     * @type {string}
     * @memberof WikiPage
     */
    'content_base64'?: string;
    /**
     * 
     * @type {string}
     * @memberof WikiPage
     */
    'footer'?: string;
    /**
     * 
     * @type {string}
     * @memberof WikiPage
     */
    'html_url'?: string;
    /**
     * 
     * @type {WikiCommit}
     * @memberof WikiPage
     */
    'last_commit'?: WikiCommit;
    /**
     * 
     * @type {string}
     * @memberof WikiPage
     */
    'sidebar'?: string;
    /**
     * 
     * @type {string}
     * @memberof WikiPage
     */
    'sub_url'?: string;
    /**
     * 
     * @type {string}
     * @memberof WikiPage
     */
    'title'?: string;
}

