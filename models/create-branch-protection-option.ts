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
 * CreateBranchProtectionOption options for creating a branch protection
 * @export
 * @interface CreateBranchProtectionOption
 */
export interface CreateBranchProtectionOption {
    /**
     * 
     * @type {Array&lt;string&gt;}
     * @memberof CreateBranchProtectionOption
     */
    approvalsWhitelistTeams?: any;
    /**
     * 
     * @type {Array&lt;string&gt;}
     * @memberof CreateBranchProtectionOption
     */
    approvalsWhitelistUsername?: any;
    /**
     * 
     * @type {boolean}
     * @memberof CreateBranchProtectionOption
     */
    blockOnOfficialReviewRequests?: any;
    /**
     * 
     * @type {boolean}
     * @memberof CreateBranchProtectionOption
     */
    blockOnOutdatedBranch?: any;
    /**
     * 
     * @type {boolean}
     * @memberof CreateBranchProtectionOption
     */
    blockOnRejectedReviews?: any;
    /**
     * 
     * @type {string}
     * @memberof CreateBranchProtectionOption
     */
    branchName?: any;
    /**
     * 
     * @type {boolean}
     * @memberof CreateBranchProtectionOption
     */
    dismissStaleApprovals?: any;
    /**
     * 
     * @type {boolean}
     * @memberof CreateBranchProtectionOption
     */
    enableApprovalsWhitelist?: any;
    /**
     * 
     * @type {boolean}
     * @memberof CreateBranchProtectionOption
     */
    enableMergeWhitelist?: any;
    /**
     * 
     * @type {boolean}
     * @memberof CreateBranchProtectionOption
     */
    enablePush?: any;
    /**
     * 
     * @type {boolean}
     * @memberof CreateBranchProtectionOption
     */
    enablePushWhitelist?: any;
    /**
     * 
     * @type {boolean}
     * @memberof CreateBranchProtectionOption
     */
    enableStatusCheck?: any;
    /**
     * 
     * @type {Array&lt;string&gt;}
     * @memberof CreateBranchProtectionOption
     */
    mergeWhitelistTeams?: any;
    /**
     * 
     * @type {Array&lt;string&gt;}
     * @memberof CreateBranchProtectionOption
     */
    mergeWhitelistUsernames?: any;
    /**
     * 
     * @type {string}
     * @memberof CreateBranchProtectionOption
     */
    protectedFilePatterns?: any;
    /**
     * 
     * @type {boolean}
     * @memberof CreateBranchProtectionOption
     */
    pushWhitelistDeployKeys?: any;
    /**
     * 
     * @type {Array&lt;string&gt;}
     * @memberof CreateBranchProtectionOption
     */
    pushWhitelistTeams?: any;
    /**
     * 
     * @type {Array&lt;string&gt;}
     * @memberof CreateBranchProtectionOption
     */
    pushWhitelistUsernames?: any;
    /**
     * 
     * @type {boolean}
     * @memberof CreateBranchProtectionOption
     */
    requireSignedCommits?: any;
    /**
     * 
     * @type {number}
     * @memberof CreateBranchProtectionOption
     */
    requiredApprovals?: any;
    /**
     * 
     * @type {Array&lt;string&gt;}
     * @memberof CreateBranchProtectionOption
     */
    statusCheckContexts?: any;
}
