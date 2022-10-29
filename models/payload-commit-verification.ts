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
import { PayloadUser } from './payload-user';

/**
 * PayloadCommitVerification represents the GPG verification of a commit
 * @export
 * @interface PayloadCommitVerification
 */
export interface PayloadCommitVerification {
    /**
     * 
     * @type {string}
     * @memberof PayloadCommitVerification
     */
    'payload'?: string;
    /**
     * 
     * @type {string}
     * @memberof PayloadCommitVerification
     */
    'reason'?: string;
    /**
     * 
     * @type {string}
     * @memberof PayloadCommitVerification
     */
    'signature'?: string;
    /**
     * 
     * @type {PayloadUser}
     * @memberof PayloadCommitVerification
     */
    'signer'?: PayloadUser;
    /**
     * 
     * @type {boolean}
     * @memberof PayloadCommitVerification
     */
    'verified'?: boolean;
}

