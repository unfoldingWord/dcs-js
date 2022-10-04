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
 * CreateBranchProtectionOption options for creating a branch protection
 * @export
 * @interface CreateBranchProtectionOption
 */
export interface CreateBranchProtectionOption {
    /**
     * 
     * @type {Array<string>}
     * @memberof CreateBranchProtectionOption
     */
    approvalsWhitelistTeams?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof CreateBranchProtectionOption
     */
    approvalsWhitelistUsername?: Array<string>;
    /**
     * 
     * @type {boolean}
     * @memberof CreateBranchProtectionOption
     */
    blockOnOfficialReviewRequests?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CreateBranchProtectionOption
     */
    blockOnOutdatedBranch?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CreateBranchProtectionOption
     */
    blockOnRejectedReviews?: boolean;
    /**
     * 
     * @type {string}
     * @memberof CreateBranchProtectionOption
     */
    branchName?: string;
    /**
     * 
     * @type {boolean}
     * @memberof CreateBranchProtectionOption
     */
    dismissStaleApprovals?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CreateBranchProtectionOption
     */
    enableApprovalsWhitelist?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CreateBranchProtectionOption
     */
    enableMergeWhitelist?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CreateBranchProtectionOption
     */
    enablePush?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CreateBranchProtectionOption
     */
    enablePushWhitelist?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CreateBranchProtectionOption
     */
    enableStatusCheck?: boolean;
    /**
     * 
     * @type {Array<string>}
     * @memberof CreateBranchProtectionOption
     */
    mergeWhitelistTeams?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof CreateBranchProtectionOption
     */
    mergeWhitelistUsernames?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof CreateBranchProtectionOption
     */
    protectedFilePatterns?: string;
    /**
     * 
     * @type {boolean}
     * @memberof CreateBranchProtectionOption
     */
    pushWhitelistDeployKeys?: boolean;
    /**
     * 
     * @type {Array<string>}
     * @memberof CreateBranchProtectionOption
     */
    pushWhitelistTeams?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof CreateBranchProtectionOption
     */
    pushWhitelistUsernames?: Array<string>;
    /**
     * 
     * @type {boolean}
     * @memberof CreateBranchProtectionOption
     */
    requireSignedCommits?: boolean;
    /**
     * 
     * @type {number}
     * @memberof CreateBranchProtectionOption
     */
    requiredApprovals?: number;
    /**
     * 
     * @type {Array<string>}
     * @memberof CreateBranchProtectionOption
     */
    statusCheckContexts?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof CreateBranchProtectionOption
     */
    unprotectedFilePatterns?: string;
}