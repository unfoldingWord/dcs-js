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
 * MergePullRequestForm form for merging Pull Request
 * @export
 * @interface MergePullRequestOption
 */
export interface MergePullRequestOption {
    /**
     * 
     * @type {string}
     * @memberof MergePullRequestOption
     */
    _do: MergePullRequestOptionDoEnum;
    /**
     * 
     * @type {string}
     * @memberof MergePullRequestOption
     */
    mergeCommitID?: string;
    /**
     * 
     * @type {string}
     * @memberof MergePullRequestOption
     */
    mergeMessageField?: string;
    /**
     * 
     * @type {string}
     * @memberof MergePullRequestOption
     */
    mergeTitleField?: string;
    /**
     * 
     * @type {boolean}
     * @memberof MergePullRequestOption
     */
    deleteBranchAfterMerge?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof MergePullRequestOption
     */
    forceMerge?: boolean;
    /**
     * 
     * @type {string}
     * @memberof MergePullRequestOption
     */
    headCommitId?: string;
}

/**
    * @export
    * @enum {string}
    */
export enum MergePullRequestOptionDoEnum {
    Merge = 'merge',
    Rebase = 'rebase',
    RebaseMerge = 'rebase-merge',
    Squash = 'squash',
    ManuallyMerged = 'manually-merged'
}

