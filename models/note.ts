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
import { Commit } from './commit';

/**
 * Note contains information related to a git note
 * @export
 * @interface Note
 */
export interface Note {
    /**
     * 
     * @type {Commit}
     * @memberof Note
     */
    'commit'?: Commit;
    /**
     * 
     * @type {string}
     * @memberof Note
     */
    'message'?: string;
}

