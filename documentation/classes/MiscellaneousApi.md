[dcs-js](../README.md) / [Exports](../modules.md) / MiscellaneousApi

# Class: MiscellaneousApi

MiscellaneousApi - object-oriented interface

**`export`**

## Hierarchy

- `BaseAPI`

  ↳ **`MiscellaneousApi`**

## Table of contents

### Constructors

- [constructor](MiscellaneousApi.md#constructor)

### Properties

- [axios](MiscellaneousApi.md#axios)
- [basePath](MiscellaneousApi.md#basepath)
- [configuration](MiscellaneousApi.md#configuration)

### Methods

- [getNodeInfo](MiscellaneousApi.md#getnodeinfo)
- [getSigningKey](MiscellaneousApi.md#getsigningkey)
- [getVersion](MiscellaneousApi.md#getversion)
- [renderMarkdown](MiscellaneousApi.md#rendermarkdown)
- [renderMarkdownRaw](MiscellaneousApi.md#rendermarkdownraw)

## Constructors

### <a id="constructor" name="constructor"></a> constructor

• **new MiscellaneousApi**(`configuration?`, `basePath?`, `axios?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `configuration?` | [`Configuration`](Configuration.md) | `undefined` |
| `basePath` | `string` | `BASE_PATH` |
| `axios` | `AxiosInstance` | `globalAxios` |

#### Inherited from

BaseAPI.constructor

#### Defined in

[base.ts:52](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/base.ts#L52)

## Properties

### <a id="axios" name="axios"></a> axios

• `Protected` **axios**: `AxiosInstance` = `globalAxios`

#### Inherited from

BaseAPI.axios

___

### <a id="basepath" name="basepath"></a> basePath

• `Protected` **basePath**: `string` = `BASE_PATH`

#### Inherited from

BaseAPI.basePath

___

### <a id="configuration" name="configuration"></a> configuration

• `Protected` **configuration**: [`Configuration`](Configuration.md)

#### Inherited from

BaseAPI.configuration

#### Defined in

[base.ts:50](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/base.ts#L50)

## Methods

### <a id="getnodeinfo" name="getnodeinfo"></a> getNodeInfo

▸ **getNodeInfo**(`options?`): `Promise`<`AxiosResponse`<[`NodeInfo`](../interfaces/NodeInfo.md)\>\>

**`summary`** Returns the nodeinfo of the Gitea application

**`throws`** {RequiredError}

**`memberof`** MiscellaneousApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `AxiosRequestConfig` |

#### Returns

`Promise`<`AxiosResponse`<[`NodeInfo`](../interfaces/NodeInfo.md)\>\>

#### Defined in

[apis/miscellaneous-api.ts:441](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/miscellaneous-api.ts#L441)

___

### <a id="getsigningkey" name="getsigningkey"></a> getSigningKey

▸ **getSigningKey**(`options?`): `Promise`<`AxiosResponse`<`string`\>\>

**`summary`** Get default signing-key.gpg

**`throws`** {RequiredError}

**`memberof`** MiscellaneousApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `AxiosRequestConfig` |

#### Returns

`Promise`<`AxiosResponse`<`string`\>\>

#### Defined in

[apis/miscellaneous-api.ts:452](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/miscellaneous-api.ts#L452)

___

### <a id="getversion" name="getversion"></a> getVersion

▸ **getVersion**(`options?`): `Promise`<`AxiosResponse`<[`ServerVersion`](../interfaces/ServerVersion.md)\>\>

**`summary`** Returns the version of the Gitea application

**`throws`** {RequiredError}

**`memberof`** MiscellaneousApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `AxiosRequestConfig` |

#### Returns

`Promise`<`AxiosResponse`<[`ServerVersion`](../interfaces/ServerVersion.md)\>\>

#### Defined in

[apis/miscellaneous-api.ts:463](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/miscellaneous-api.ts#L463)

___

### <a id="rendermarkdown" name="rendermarkdown"></a> renderMarkdown

▸ **renderMarkdown**(`body?`, `options?`): `Promise`<`AxiosResponse`<`string`\>\>

**`summary`** Render a markdown document as HTML

**`throws`** {RequiredError}

**`memberof`** MiscellaneousApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `body?` | [`MarkdownOption`](../interfaces/MarkdownOption.md) |
| `options?` | `AxiosRequestConfig` |

#### Returns

`Promise`<`AxiosResponse`<`string`\>\>

#### Defined in

[apis/miscellaneous-api.ts:475](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/miscellaneous-api.ts#L475)

___

### <a id="rendermarkdownraw" name="rendermarkdownraw"></a> renderMarkdownRaw

▸ **renderMarkdownRaw**(`body`, `options?`): `Promise`<`AxiosResponse`<`string`\>\>

**`summary`** Render raw markdown as HTML

**`throws`** {RequiredError}

**`memberof`** MiscellaneousApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `body` | `string` | Request body to render |
| `options?` | `AxiosRequestConfig` | - |

#### Returns

`Promise`<`AxiosResponse`<`string`\>\>

#### Defined in

[apis/miscellaneous-api.ts:487](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/miscellaneous-api.ts#L487)
