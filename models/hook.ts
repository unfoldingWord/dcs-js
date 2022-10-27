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



/**
 * Hook a hook is a web hook when one repository changed
 * @export
 * @interface Hook
 */
export interface Hook {
    /**
     * 
     * @type {boolean}
     * @memberof Hook
     */
    'active'?: boolean;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof Hook
     */
    'config'?: { [key: string]: string; };
    /**
     * 
     * @type {string}
     * @memberof Hook
     */
    'created_at'?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof Hook
     */
    'events'?: Array<string>;
    /**
     * 
     * @type {number}
     * @memberof Hook
     */
    'id'?: number;
    /**
     * 
     * @type {string}
     * @memberof Hook
     */
    'type'?: string;
    /**
     * 
     * @type {string}
     * @memberof Hook
     */
    'updated_at'?: string;
}
