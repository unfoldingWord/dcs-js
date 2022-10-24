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


// May contain unused imports in some cases
// @ts-ignore
import { AnnotatedTagObject } from './annotated-tag-object';
// May contain unused imports in some cases
// @ts-ignore
import { CommitUser } from './commit-user';
// May contain unused imports in some cases
// @ts-ignore
import { PayloadCommitVerification } from './payload-commit-verification';

/**
 * AnnotatedTag represents an annotated tag
 * @export
 * @interface AnnotatedTag
 */
export interface AnnotatedTag {
    /**
     * 
     * @type {string}
     * @memberof AnnotatedTag
     */
    'message'?: string;
    /**
     * 
     * @type {AnnotatedTagObject}
     * @memberof AnnotatedTag
     */
    'object'?: AnnotatedTagObject;
    /**
     * 
     * @type {string}
     * @memberof AnnotatedTag
     */
    'sha'?: string;
    /**
     * 
     * @type {string}
     * @memberof AnnotatedTag
     */
    'tag'?: string;
    /**
     * 
     * @type {CommitUser}
     * @memberof AnnotatedTag
     */
    'tagger'?: CommitUser;
    /**
     * 
     * @type {string}
     * @memberof AnnotatedTag
     */
    'url'?: string;
    /**
     * 
     * @type {PayloadCommitVerification}
     * @memberof AnnotatedTag
     */
    'verification'?: PayloadCommitVerification;
}

