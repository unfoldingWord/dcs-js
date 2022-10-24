/* tslint:disable */
/* eslint-disable */
/**
 * DCS (Gitea) API.
 * This documentation describes the DCS (Gitea) API.
 *
 * The version of the OpenAPI document: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import { Team } from './team';
// May contain unused imports in some cases
// @ts-ignore
import { User } from './user';

/**
 * RepoTransfer represents a pending repo transfer
 * @export
 * @interface RepoTransfer
 */
export interface RepoTransfer {
    /**
     * 
     * @type {User}
     * @memberof RepoTransfer
     */
    'doer'?: User;
    /**
     * 
     * @type {User}
     * @memberof RepoTransfer
     */
    'recipient'?: User;
    /**
     * 
     * @type {Array<Team>}
     * @memberof RepoTransfer
     */
    'teams'?: Array<Team>;
}

