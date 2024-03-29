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
 * Ingredient is a single project of a resource
 * @export
 * @interface Ingredient
 */
export interface Ingredient {
    /**
     * 
     * @type {Array<string>}
     * @memberof Ingredient
     */
    'categories'?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof Ingredient
     */
    'identifier'?: string;
    /**
     * 
     * @type {string}
     * @memberof Ingredient
     */
    'path'?: string;
    /**
     * 
     * @type {number}
     * @memberof Ingredient
     */
    'sort'?: number;
    /**
     * 
     * @type {string}
     * @memberof Ingredient
     */
    'title'?: string;
    /**
     * 
     * @type {string}
     * @memberof Ingredient
     */
    'versification'?: string;
}

