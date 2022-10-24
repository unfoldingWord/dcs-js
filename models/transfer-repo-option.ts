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



/**
 * TransferRepoOption options when transfer a repository\'s ownership
 * @export
 * @interface TransferRepoOption
 */
export interface TransferRepoOption {
    /**
     * 
     * @type {string}
     * @memberof TransferRepoOption
     */
    'new_owner': string;
    /**
     * ID of the team or teams to add to the repository. Teams can only be added to organization-owned repositories.
     * @type {Array<number>}
     * @memberof TransferRepoOption
     */
    'team_ids'?: Array<number>;
}

