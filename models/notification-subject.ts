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
 * NotificationSubject contains the notification subject (Issue/Pull/Commit)
 * @export
 * @interface NotificationSubject
 */
export interface NotificationSubject {
    /**
     * 
     * @type {string}
     * @memberof NotificationSubject
     */
    'html_url'?: string;
    /**
     * 
     * @type {string}
     * @memberof NotificationSubject
     */
    'latest_comment_html_url'?: string;
    /**
     * 
     * @type {string}
     * @memberof NotificationSubject
     */
    'latest_comment_url'?: string;
    /**
     * StateType issue state type
     * @type {string}
     * @memberof NotificationSubject
     */
    'state'?: string;
    /**
     * 
     * @type {string}
     * @memberof NotificationSubject
     */
    'title'?: string;
    /**
     * NotifySubjectType represent type of notification subject
     * @type {string}
     * @memberof NotificationSubject
     */
    'type'?: string;
    /**
     * 
     * @type {string}
     * @memberof NotificationSubject
     */
    'url'?: string;
}

