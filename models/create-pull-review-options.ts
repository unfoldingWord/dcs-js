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
import { CreatePullReviewComment } from './create-pull-review-comment';

/**
 * CreatePullReviewOptions are options to create a pull review
 * @export
 * @interface CreatePullReviewOptions
 */
export interface CreatePullReviewOptions {
    /**
     * 
     * @type {string}
     * @memberof CreatePullReviewOptions
     */
    'body'?: string;
    /**
     * 
     * @type {Array<CreatePullReviewComment>}
     * @memberof CreatePullReviewOptions
     */
    'comments'?: Array<CreatePullReviewComment>;
    /**
     * 
     * @type {string}
     * @memberof CreatePullReviewOptions
     */
    'commit_id'?: string;
    /**
     * ReviewStateType review state type
     * @type {string}
     * @memberof CreatePullReviewOptions
     */
    'event'?: string;
}

