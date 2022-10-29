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
 * InternalTracker represents settings for internal tracker
 * @export
 * @interface InternalTracker
 */
export interface InternalTracker {
    /**
     * Let only contributors track time (Built-in issue tracker)
     * @type {boolean}
     * @memberof InternalTracker
     */
    'allow_only_contributors_to_track_time'?: boolean;
    /**
     * Enable dependencies for issues and pull requests (Built-in issue tracker)
     * @type {boolean}
     * @memberof InternalTracker
     */
    'enable_issue_dependencies'?: boolean;
    /**
     * Enable time tracking (Built-in issue tracker)
     * @type {boolean}
     * @memberof InternalTracker
     */
    'enable_time_tracker'?: boolean;
}

