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
 * ExternalTracker represents settings for external tracker
 * @export
 * @interface ExternalTracker
 */
export interface ExternalTracker {
    /**
     * External Issue Tracker URL Format. Use the placeholders {user}, {repo} and {index} for the username, repository name and issue index.
     * @type {string}
     * @memberof ExternalTracker
     */
    'external_tracker_format'?: string;
    /**
     * External Issue Tracker Number Format, either `numeric` or `alphanumeric`
     * @type {string}
     * @memberof ExternalTracker
     */
    'external_tracker_style'?: string;
    /**
     * URL of external issue tracker.
     * @type {string}
     * @memberof ExternalTracker
     */
    'external_tracker_url'?: string;
}

