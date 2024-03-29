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
import { CatalogVersionEndpoints } from './catalog-version-endpoints';

/**
 * CatalogVersionEndpointsResponse response with the endpoints for all versions of the catalog
 * @export
 * @interface CatalogVersionEndpointsResponse
 */
export interface CatalogVersionEndpointsResponse {
    /**
     * 
     * @type {Array<CatalogVersionEndpoints>}
     * @memberof CatalogVersionEndpointsResponse
     */
    'data'?: Array<CatalogVersionEndpoints>;
    /**
     * 
     * @type {boolean}
     * @memberof CatalogVersionEndpointsResponse
     */
    'ok'?: boolean;
}

