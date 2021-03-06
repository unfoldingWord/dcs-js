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
/**
 * EditPullRequestOption options when modify pull request
 * @export
 * @interface EditPullRequestOption
 */
export interface EditPullRequestOption {
    /**
     * 
     * @type {string}
     * @memberof EditPullRequestOption
     */
    assignee?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof EditPullRequestOption
     */
    assignees?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof EditPullRequestOption
     */
    base?: string;
    /**
     * 
     * @type {string}
     * @memberof EditPullRequestOption
     */
    body?: string;
    /**
     * 
     * @type {Date}
     * @memberof EditPullRequestOption
     */
    dueDate?: Date;
    /**
     * 
     * @type {Array<number>}
     * @memberof EditPullRequestOption
     */
    labels?: Array<number>;
    /**
     * 
     * @type {number}
     * @memberof EditPullRequestOption
     */
    milestone?: number;
    /**
     * 
     * @type {string}
     * @memberof EditPullRequestOption
     */
    state?: string;
    /**
     * 
     * @type {string}
     * @memberof EditPullRequestOption
     */
    title?: string;
    /**
     * 
     * @type {boolean}
     * @memberof EditPullRequestOption
     */
    unsetDueDate?: boolean;
}
