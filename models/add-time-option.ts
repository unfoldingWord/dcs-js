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
 * AddTimeOption options for adding time to an issue
 * @export
 * @interface AddTimeOption
 */
export interface AddTimeOption {
    /**
     * 
     * @type {string}
     * @memberof AddTimeOption
     */
    'created'?: string;
    /**
     * time in seconds
     * @type {number}
     * @memberof AddTimeOption
     */
    'time': number;
    /**
     * User who spent the time (optional)
     * @type {string}
     * @memberof AddTimeOption
     */
    'user_name'?: string;
}

