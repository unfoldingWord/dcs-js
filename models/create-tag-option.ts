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



/**
 * CreateTagOption options when creating a tag
 * @export
 * @interface CreateTagOption
 */
export interface CreateTagOption {
    /**
     * 
     * @type {string}
     * @memberof CreateTagOption
     */
    'message'?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateTagOption
     */
    'tag_name': string;
    /**
     * 
     * @type {string}
     * @memberof CreateTagOption
     */
    'target'?: string;
}

