[dcs-js](../README.md) / [Exports](../modules.md) / SettingsApi

# Class: SettingsApi

SettingsApi - object-oriented interface

**`export`**

## Hierarchy

- `BaseAPI`

  ↳ **`SettingsApi`**

## Table of contents

### Constructors

- [constructor](SettingsApi.md#constructor)

### Properties

- [axios](SettingsApi.md#axios)
- [basePath](SettingsApi.md#basepath)
- [configuration](SettingsApi.md#configuration)

### Methods

- [getGeneralAPISettings](SettingsApi.md#getgeneralapisettings)
- [getGeneralAttachmentSettings](SettingsApi.md#getgeneralattachmentsettings)
- [getGeneralRepositorySettings](SettingsApi.md#getgeneralrepositorysettings)
- [getGeneralUISettings](SettingsApi.md#getgeneraluisettings)

## Constructors

### <a id="constructor" name="constructor"></a> constructor

• **new SettingsApi**(`configuration?`, `basePath?`, `axios?`)

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

### <a id="getgeneralapisettings" name="getgeneralapisettings"></a> getGeneralAPISettings

▸ **getGeneralAPISettings**(`options?`): `Promise`<`AxiosResponse`<[`GeneralAPISettings`](../interfaces/GeneralAPISettings.md)\>\>

**`summary`** Get instance\'s global settings for api

**`throws`** {RequiredError}

**`memberof`** SettingsApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `AxiosRequestConfig` |

#### Returns

`Promise`<`AxiosResponse`<[`GeneralAPISettings`](../interfaces/GeneralAPISettings.md)\>\>

#### Defined in

[apis/settings-api.ts:358](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/settings-api.ts#L358)

___

### <a id="getgeneralattachmentsettings" name="getgeneralattachmentsettings"></a> getGeneralAttachmentSettings

▸ **getGeneralAttachmentSettings**(`options?`): `Promise`<`AxiosResponse`<[`GeneralAttachmentSettings`](../interfaces/GeneralAttachmentSettings.md)\>\>

**`summary`** Get instance\'s global settings for Attachment

**`throws`** {RequiredError}

**`memberof`** SettingsApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `AxiosRequestConfig` |

#### Returns

`Promise`<`AxiosResponse`<[`GeneralAttachmentSettings`](../interfaces/GeneralAttachmentSettings.md)\>\>

#### Defined in

[apis/settings-api.ts:369](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/settings-api.ts#L369)

___

### <a id="getgeneralrepositorysettings" name="getgeneralrepositorysettings"></a> getGeneralRepositorySettings

▸ **getGeneralRepositorySettings**(`options?`): `Promise`<`AxiosResponse`<[`GeneralRepoSettings`](../interfaces/GeneralRepoSettings.md)\>\>

**`summary`** Get instance\'s global settings for repositories

**`throws`** {RequiredError}

**`memberof`** SettingsApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `AxiosRequestConfig` |

#### Returns

`Promise`<`AxiosResponse`<[`GeneralRepoSettings`](../interfaces/GeneralRepoSettings.md)\>\>

#### Defined in

[apis/settings-api.ts:380](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/settings-api.ts#L380)

___

### <a id="getgeneraluisettings" name="getgeneraluisettings"></a> getGeneralUISettings

▸ **getGeneralUISettings**(`options?`): `Promise`<`AxiosResponse`<[`GeneralUISettings`](../interfaces/GeneralUISettings.md)\>\>

**`summary`** Get instance\'s global settings for ui

**`throws`** {RequiredError}

**`memberof`** SettingsApi

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `AxiosRequestConfig` |

#### Returns

`Promise`<`AxiosResponse`<[`GeneralUISettings`](../interfaces/GeneralUISettings.md)\>\>

#### Defined in

[apis/settings-api.ts:391](https://github.com/unfoldingWord/dcs-js/blob/09d5a5e/apis/settings-api.ts#L391)
