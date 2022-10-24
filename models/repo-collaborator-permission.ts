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


// May contain unused imports in some cases
// @ts-ignore
import { User } from './user';

/**
 * RepoCollaboratorPermission to get repository permission for a collaborator
 * @export
 * @interface RepoCollaboratorPermission
 */
export interface RepoCollaboratorPermission {
    /**
     * 
     * @type {string}
     * @memberof RepoCollaboratorPermission
     */
    'permission'?: string;
    /**
     * 
     * @type {string}
     * @memberof RepoCollaboratorPermission
     */
    'role_name'?: string;
    /**
     * 
     * @type {User}
     * @memberof RepoCollaboratorPermission
     */
    'user'?: User;
}

