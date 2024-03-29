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



/**
 * PullReviewRequestOptions are options to add or remove pull review requests
 * @export
 * @interface PullReviewRequestOptions
 */
export interface PullReviewRequestOptions {
    /**
     * 
     * @type {Array<string>}
     * @memberof PullReviewRequestOptions
     */
    'reviewers'?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof PullReviewRequestOptions
     */
    'team_reviewers'?: Array<string>;
}

