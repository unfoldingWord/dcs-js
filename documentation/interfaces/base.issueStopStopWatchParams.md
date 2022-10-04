[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / issueStopStopWatchParams

# Interface: issueStopStopWatchParams

[base](../modules/base.md).issueStopStopWatchParams

## Hierarchy

- `baseParams`

  ↳ **`issueStopStopWatchParams`**

## Table of contents

### Properties

- [auth](base.issueStopStopWatchParams.md#auth)
- [index](base.issueStopStopWatchParams.md#index)
- [options](base.issueStopStopWatchParams.md#options)
- [owner](base.issueStopStopWatchParams.md#owner)
- [repo](base.issueStopStopWatchParams.md#repo)

## Properties

### <a id="auth" name="auth"></a> auth

• `Optional` **auth**: `auth`

#### Inherited from

baseParams.auth

#### Defined in

base/utils.ts:2

___

### <a id="index" name="index"></a> index

• **index**: `number`

index of the issue to stop the stopwatch on

#### Defined in

base/issue/issue-stop-stop-watch.ts:11

___

### <a id="options" name="options"></a> options

• `Optional` **options**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `basePath?` | `string` |
| `headers?` | { `[key: string]`: `any`;  } |
| `query?` | { `[key: string]`: `any`;  } |

#### Inherited from

baseParams.options

#### Defined in

base/utils.ts:3

___

### <a id="owner" name="owner"></a> owner

• **owner**: `string`

owner of the repo

#### Defined in

base/issue/issue-stop-stop-watch.ts:7

___

### <a id="repo" name="repo"></a> repo

• **repo**: `string`

name of the repo

#### Defined in

base/issue/issue-stop-stop-watch.ts:9