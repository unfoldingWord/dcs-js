/* tslint:disable */
/* eslint-disable */
/**
 * DCS (Gitea) API.
 * This documentation describes the DCS (Gitea) API.
 *
 * The version of the OpenAPI document: 1.17.3+dcs
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import { Organization } from './organization';

/**
 * Team represents a team in an organization
 * @export
 * @interface Team
 */
export interface Team {
    /**
     * 
     * @type {boolean}
     * @memberof Team
     */
    'can_create_org_repo'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof Team
     */
    'description'?: string;
    /**
     * 
     * @type {number}
     * @memberof Team
     */
    'id'?: number;
    /**
     * 
     * @type {boolean}
     * @memberof Team
     */
    'includes_all_repositories'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof Team
     */
    'name'?: string;
    /**
     * 
     * @type {Organization}
     * @memberof Team
     */
    'organization'?: Organization;
    /**
     * 
     * @type {string}
     * @memberof Team
     */
    'permission'?: TeamPermissionEnum;
    /**
     * 
     * @type {Array<string>}
     * @memberof Team
     */
    'units'?: Array<string>;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof Team
     */
    'units_map'?: { [key: string]: string; };
}

export const TeamPermissionEnum = {
    None: 'none',
    Read: 'read',
    Write: 'write',
    Admin: 'admin',
    Owner: 'owner'
} as const;

export type TeamPermissionEnum = typeof TeamPermissionEnum[keyof typeof TeamPermissionEnum];


