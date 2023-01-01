/* tslint:disable */
/* eslint-disable */
/**
 * DCS (Gitea) API.
 * This documentation describes the DCS (Gitea) API.
 *
 * The version of the OpenAPI document: 1.17.4+dcs
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { MarkdownOption } from '../models';
// @ts-ignore
import { NodeInfo } from '../models';
// @ts-ignore
import { ServerVersion } from '../models';
/**
 * MiscellaneousApi - axios parameter creator
 * @export
 */
export const MiscellaneousApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Returns the nodeinfo of the Gitea application
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getNodeInfo: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/nodeinfo`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication AccessToken required
            await setApiKeyToObject(localVarQueryParameter, "access_token", configuration)

            // authentication AuthorizationHeaderToken required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)

            // authentication BasicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication SudoHeader required
            await setApiKeyToObject(localVarHeaderParameter, "Sudo", configuration)

            // authentication SudoParam required
            await setApiKeyToObject(localVarQueryParameter, "sudo", configuration)

            // authentication TOTPHeader required
            await setApiKeyToObject(localVarHeaderParameter, "X-GITEA-OTP", configuration)

            // authentication Token required
            await setApiKeyToObject(localVarQueryParameter, "token", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get default signing-key.gpg
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSigningKey: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/signing-key.gpg`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication AccessToken required
            await setApiKeyToObject(localVarQueryParameter, "access_token", configuration)

            // authentication AuthorizationHeaderToken required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)

            // authentication BasicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication SudoHeader required
            await setApiKeyToObject(localVarHeaderParameter, "Sudo", configuration)

            // authentication SudoParam required
            await setApiKeyToObject(localVarQueryParameter, "sudo", configuration)

            // authentication TOTPHeader required
            await setApiKeyToObject(localVarHeaderParameter, "X-GITEA-OTP", configuration)

            // authentication Token required
            await setApiKeyToObject(localVarQueryParameter, "token", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Returns the version of the Gitea application
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getVersion: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/version`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication AccessToken required
            await setApiKeyToObject(localVarQueryParameter, "access_token", configuration)

            // authentication AuthorizationHeaderToken required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)

            // authentication BasicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication SudoHeader required
            await setApiKeyToObject(localVarHeaderParameter, "Sudo", configuration)

            // authentication SudoParam required
            await setApiKeyToObject(localVarQueryParameter, "sudo", configuration)

            // authentication TOTPHeader required
            await setApiKeyToObject(localVarHeaderParameter, "X-GITEA-OTP", configuration)

            // authentication Token required
            await setApiKeyToObject(localVarQueryParameter, "token", configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Render a markdown document as HTML
         * @param {MarkdownOption} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        renderMarkdown: async (body?: MarkdownOption, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/markdown`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication AccessToken required
            await setApiKeyToObject(localVarQueryParameter, "access_token", configuration)

            // authentication AuthorizationHeaderToken required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)

            // authentication BasicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication SudoHeader required
            await setApiKeyToObject(localVarHeaderParameter, "Sudo", configuration)

            // authentication SudoParam required
            await setApiKeyToObject(localVarQueryParameter, "sudo", configuration)

            // authentication TOTPHeader required
            await setApiKeyToObject(localVarHeaderParameter, "X-GITEA-OTP", configuration)

            // authentication Token required
            await setApiKeyToObject(localVarQueryParameter, "token", configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(body, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Render raw markdown as HTML
         * @param {string} body Request body to render
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        renderMarkdownRaw: async (body: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            assertParamExists('renderMarkdownRaw', 'body', body)
            const localVarPath = `/markdown/raw`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication AccessToken required
            await setApiKeyToObject(localVarQueryParameter, "access_token", configuration)

            // authentication AuthorizationHeaderToken required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)

            // authentication BasicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication SudoHeader required
            await setApiKeyToObject(localVarHeaderParameter, "Sudo", configuration)

            // authentication SudoParam required
            await setApiKeyToObject(localVarQueryParameter, "sudo", configuration)

            // authentication TOTPHeader required
            await setApiKeyToObject(localVarHeaderParameter, "X-GITEA-OTP", configuration)

            // authentication Token required
            await setApiKeyToObject(localVarQueryParameter, "token", configuration)


    
            localVarHeaderParameter['Content-Type'] = 'text/plain';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(body, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * MiscellaneousApi - functional programming interface
 * @export
 */
export const MiscellaneousApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = MiscellaneousApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Returns the nodeinfo of the Gitea application
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getNodeInfo(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<NodeInfo>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getNodeInfo(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Get default signing-key.gpg
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getSigningKey(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getSigningKey(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Returns the version of the Gitea application
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getVersion(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ServerVersion>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getVersion(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Render a markdown document as HTML
         * @param {MarkdownOption} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async renderMarkdown(body?: MarkdownOption, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.renderMarkdown(body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Render raw markdown as HTML
         * @param {string} body Request body to render
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async renderMarkdownRaw(body: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.renderMarkdownRaw(body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * MiscellaneousApi - factory interface
 * @export
 */
export const MiscellaneousApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = MiscellaneousApiFp(configuration)
    return {
        /**
         * 
         * @summary Returns the nodeinfo of the Gitea application
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getNodeInfo(options?: any): AxiosPromise<NodeInfo> {
            return localVarFp.getNodeInfo(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get default signing-key.gpg
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSigningKey(options?: any): AxiosPromise<string> {
            return localVarFp.getSigningKey(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Returns the version of the Gitea application
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getVersion(options?: any): AxiosPromise<ServerVersion> {
            return localVarFp.getVersion(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Render a markdown document as HTML
         * @param {MarkdownOption} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        renderMarkdown(body?: MarkdownOption, options?: any): AxiosPromise<string> {
            return localVarFp.renderMarkdown(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Render raw markdown as HTML
         * @param {string} body Request body to render
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        renderMarkdownRaw(body: string, options?: any): AxiosPromise<string> {
            return localVarFp.renderMarkdownRaw(body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for renderMarkdown operation in MiscellaneousApi.
 * @export
 * @interface MiscellaneousApiRenderMarkdownRequest
 */
export interface MiscellaneousApiRenderMarkdownRequest {
    /**
     * 
     * @type {MarkdownOption}
     * @memberof MiscellaneousApiRenderMarkdown
     */
    readonly body?: MarkdownOption
}

/**
 * Request parameters for renderMarkdownRaw operation in MiscellaneousApi.
 * @export
 * @interface MiscellaneousApiRenderMarkdownRawRequest
 */
export interface MiscellaneousApiRenderMarkdownRawRequest {
    /**
     * Request body to render
     * @type {string}
     * @memberof MiscellaneousApiRenderMarkdownRaw
     */
    readonly body: string
}

/**
 * MiscellaneousApi - object-oriented interface
 * @export
 * @class MiscellaneousApi
 * @extends {BaseAPI}
 */
export class MiscellaneousApi extends BaseAPI {
    /**
     * 
     * @summary Returns the nodeinfo of the Gitea application
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MiscellaneousApi
     */
    public getNodeInfo(options?: AxiosRequestConfig) {
        return MiscellaneousApiFp(this.configuration).getNodeInfo(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get default signing-key.gpg
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MiscellaneousApi
     */
    public getSigningKey(options?: AxiosRequestConfig) {
        return MiscellaneousApiFp(this.configuration).getSigningKey(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Returns the version of the Gitea application
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MiscellaneousApi
     */
    public getVersion(options?: AxiosRequestConfig) {
        return MiscellaneousApiFp(this.configuration).getVersion(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Render a markdown document as HTML
     * @param {MiscellaneousApiRenderMarkdownRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MiscellaneousApi
     */
    public renderMarkdown(requestParameters: MiscellaneousApiRenderMarkdownRequest = {}, options?: AxiosRequestConfig) {
        return MiscellaneousApiFp(this.configuration).renderMarkdown(requestParameters.body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Render raw markdown as HTML
     * @param {MiscellaneousApiRenderMarkdownRawRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MiscellaneousApi
     */
    public renderMarkdownRaw(requestParameters: MiscellaneousApiRenderMarkdownRawRequest, options?: AxiosRequestConfig) {
        return MiscellaneousApiFp(this.configuration).renderMarkdownRaw(requestParameters.body, options).then((request) => request(this.axios, this.basePath));
    }
}
