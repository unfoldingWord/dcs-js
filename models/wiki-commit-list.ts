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
    commits?: Array<WikiCommit>;
    /**
     * 
     * @type {number}
     * @memberof WikiCommitList
     */
    count?: number;
}
