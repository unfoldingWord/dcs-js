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
import { Team } from './team';
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
    doer?: User;
    /**
     * 
     * @type {User}
     * @memberof RepoTransfer
     */
    recipient?: User;
    /**
     * 
     * @type {Array<Team>}
     * @memberof RepoTransfer
     */
    teams?: Array<Team>;
}
