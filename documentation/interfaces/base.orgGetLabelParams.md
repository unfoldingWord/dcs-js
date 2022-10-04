[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / orgGetLabelParams

# Interface: orgGetLabelParams

[base](../modules/base.md).orgGetLabelParams

## Hierarchy

- `baseParams`

  ↳ **`orgGetLabelParams`**

## Table of contents

### Properties

- [auth](base.orgGetLabelParams.md#auth)
- [id](base.orgGetLabelParams.md#id)
- [options](base.orgGetLabelParams.md#options)
- [org](base.orgGetLabelParams.md#org)

## Properties

### <a id="auth" name="auth"></a> auth

• `Optional` **auth**: `auth`

#### Inherited from

baseParams.auth

#### Defined in

base/utils.ts:2

___

### <a id="id" name="id"></a> id

• **id**: `number`

id of the label to get

#### Defined in

base/organization/org-get-label.ts:8

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

### <a id="org" name="org"></a> org

• **org**: `string`

name of the organization

#### Defined in

base/organization/org-get-label.ts:6