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
import { WikiCommit } from './wiki-commit';

/**
 * WikiCommitList commit/revision list
 * @export
 * @interface WikiCommitList
 */
export interface WikiCommitList {
    /**
     * 
     * @type {Array<WikiCommit>}
     * @memberof WikiCommitList
     */
    'commits'?: Array<WikiCommit>;
    /**
     * 
     * @type {number}
     * @memberof WikiCommitList
     */
    'count'?: number;
}

