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
import { NotificationSubject } from './notification-subject';
// May contain unused imports in some cases
// @ts-ignore
import { Repository } from './repository';

/**
 * NotificationThread expose Notification on API
 * @export
 * @interface NotificationThread
 */
export interface NotificationThread {
    /**
     * 
     * @type {number}
     * @memberof NotificationThread
     */
    'id'?: number;
    /**
     * 
     * @type {boolean}
     * @memberof NotificationThread
     */
    'pinned'?: boolean;
    /**
     * 
     * @type {Repository}
     * @memberof NotificationThread
     */
    'repository'?: Repository;
    /**
     * 
     * @type {NotificationSubject}
     * @memberof NotificationThread
     */
    'subject'?: NotificationSubject;
    /**
     * 
     * @type {boolean}
     * @memberof NotificationThread
     */
    'unread'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof NotificationThread
     */
    'updated_at'?: string;
    /**
     * 
     * @type {string}
     * @memberof NotificationThread
     */
    'url'?: string;
}

