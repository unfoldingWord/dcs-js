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
 * CreateIssueOption options to create one issue
 * @export
 * @interface CreateIssueOption
 */
export interface CreateIssueOption {
    /**
     * deprecated
     * @type {string}
     * @memberof CreateIssueOption
     */
    assignee?: any;
    /**
     * 
     * @type {Array&lt;string&gt;}
     * @memberof CreateIssueOption
     */
    assignees?: any;
    /**
     * 
     * @type {string}
     * @memberof CreateIssueOption
     */
    body?: any;
    /**
     * 
     * @type {boolean}
     * @memberof CreateIssueOption
     */
    closed?: any;
    /**
     * 
     * @type {Date}
     * @memberof CreateIssueOption
     */
    dueDate?: any;
    /**
     * list of label ids
     * @type {Array&lt;number&gt;}
     * @memberof CreateIssueOption
     */
    labels?: any;
    /**
     * milestone id
     * @type {number}
     * @memberof CreateIssueOption
     */
    milestone?: any;
    /**
     * 
     * @type {string}
     * @memberof CreateIssueOption
     */
    ref?: any;
    /**
     * 
     * @type {string}
     * @memberof CreateIssueOption
     */
    title: any;
}
