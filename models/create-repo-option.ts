/* tslint:disable */
/* eslint-disable */
/**
 * DCS (Gitea) API.
 * This documentation describes the DCS (Gitea) API.
 *
 * OpenAPI spec version: 1.15.6a+dcs
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/**
 * CreateRepoOption options when creating repository
 * @export
 * @interface CreateRepoOption
 */
export interface CreateRepoOption {
    /**
     * Whether the repository should be auto-intialized?
     * @type {boolean}
     * @memberof CreateRepoOption
     */
    autoInit?: any;
    /**
     * DefaultBranch of the repository (used when initializes and in template)
     * @type {string}
     * @memberof CreateRepoOption
     */
    defaultBranch?: any;
    /**
     * Description of the repository to create
     * @type {string}
     * @memberof CreateRepoOption
     */
    description?: any;
    /**
     * Gitignores to use
     * @type {string}
     * @memberof CreateRepoOption
     */
    gitignores?: any;
    /**
     * Label-Set to use
     * @type {string}
     * @memberof CreateRepoOption
     */
    issueLabels?: any;
    /**
     * License to use
     * @type {string}
     * @memberof CreateRepoOption
     */
    license?: any;
    /**
     * Name of the repository to create
     * @type {string}
     * @memberof CreateRepoOption
     */
    name: any;
    /**
     * Whether the repository is private
     * @type {boolean}
     * @memberof CreateRepoOption
     */
    _private?: any;
    /**
     * Readme of the repository to create
     * @type {string}
     * @memberof CreateRepoOption
     */
    readme?: any;
    /**
     * Whether the repository is template
     * @type {boolean}
     * @memberof CreateRepoOption
     */
    template?: any;
    /**
     * TrustModel of the repository
     * @type {string}
     * @memberof CreateRepoOption
     */
    trustModel?: CreateRepoOptionTrustModelEnum;
}

/**
    * @export
    * @enum {string}
    */
export enum CreateRepoOptionTrustModelEnum {
    Default = 'default',
    Collaborator = 'collaborator',
    Committer = 'committer',
    Collaboratorcommitter = 'collaboratorcommitter'
}

