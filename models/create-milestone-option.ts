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
 * CreateMilestoneOption options for creating a milestone
 * @export
 * @interface CreateMilestoneOption
 */
export interface CreateMilestoneOption {
    /**
     * 
     * @type {string}
     * @memberof CreateMilestoneOption
     */
    'description'?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateMilestoneOption
     */
    'due_on'?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateMilestoneOption
     */
    'state'?: CreateMilestoneOptionStateEnum;
    /**
     * 
     * @type {string}
     * @memberof CreateMilestoneOption
     */
    'title'?: string;
}

export const CreateMilestoneOptionStateEnum = {
    Open: 'open',
    Closed: 'closed'
} as const;

export type CreateMilestoneOptionStateEnum = typeof CreateMilestoneOptionStateEnum[keyof typeof CreateMilestoneOptionStateEnum];


