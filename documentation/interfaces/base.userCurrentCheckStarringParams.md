[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / userCurrentCheckStarringParams

# Interface: userCurrentCheckStarringParams

[base](../modules/base.md).userCurrentCheckStarringParams

## Hierarchy

- `baseParams`

  ↳ **`userCurrentCheckStarringParams`**

## Table of contents

### Properties

- [auth](base.userCurrentCheckStarringParams.md#auth)
- [options](base.userCurrentCheckStarringParams.md#options)
- [owner](base.userCurrentCheckStarringParams.md#owner)
- [repo](base.userCurrentCheckStarringParams.md#repo)

## Properties

### <a id="auth" name="auth"></a> auth

• `Optional` **auth**: `auth`

#### Inherited from

baseParams.auth

#### Defined in

base/utils.ts:2

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

base/user/user-current-check-starring.ts:7

___

### <a id="repo" name="repo"></a> repo

• **repo**: `string`

name of the repo

#### Defined in

base/user/user-current-check-starring.ts:9