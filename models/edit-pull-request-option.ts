/* tslint:disable */
/* eslint-disable */
/**
 * DCS (Gitea) API.
 * This documentation describes the DCS (Gitea) API.
 *
 * OpenAPI spec version: 1.15.6a+dcs
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
    assignee?: any;
    /**
     * 
     * @type {Array&lt;string&gt;}
     * @memberof EditPullRequestOption
     */
    assignees?: any;
    /**
     * 
     * @type {string}
     * @memberof EditPullRequestOption
     */
    base?: any;
    /**
     * 
     * @type {string}
     * @memberof EditPullRequestOption
     */
    body?: any;
    /**
     * 
     * @type {Date}
     * @memberof EditPullRequestOption
     */
    dueDate?: any;
    /**
     * 
     * @type {Array&lt;number&gt;}
     * @memberof EditPullRequestOption
     */
    labels?: any;
    /**
     * 
     * @type {number}
     * @memberof EditPullRequestOption
     */
    milestone?: any;
    /**
     * 
     * @type {string}
     * @memberof EditPullRequestOption
     */
    state?: any;
    /**
     * 
     * @type {string}
     * @memberof EditPullRequestOption
     */
    title?: any;
    /**
     * 
     * @type {boolean}
     * @memberof EditPullRequestOption
     */
    unsetDueDate?: any;
}
