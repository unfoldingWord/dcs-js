[dcs-js](../README.md) / [Exports](../modules.md) / [base](../modules/base.md) / repoListStargazersParams

# Interface: repoListStargazersParams

[base](../modules/base.md).repoListStargazersParams

## Hierarchy

- `baseParams`

  ↳ **`repoListStargazersParams`**

## Table of contents

### Properties

- [auth](base.repoListStargazersParams.md#auth)
- [limit](base.repoListStargazersParams.md#limit)
- [options](base.repoListStargazersParams.md#options)
- [owner](base.repoListStargazersParams.md#owner)
- [page](base.repoListStargazersParams.md#page)
- [repo](base.repoListStargazersParams.md#repo)

## Properties

### <a id="auth" name="auth"></a> auth

• `Optional` **auth**: `auth`

#### Inherited from

baseParams.auth

#### Defined in

base/utils.ts:2

___

### <a id="limit" name="limit"></a> limit

• `Optional` **limit**: `number`

page size of results

#### Defined in

base/repository/repo-list-stargazers.ts:12

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

base/repository/repo-list-stargazers.ts:6

___

### <a id="page" name="page"></a> page

• `Optional` **page**: `number`

page number of results to return (1-based)

#### Defined in

base/repository/repo-list-stargazers.ts:10

___

### <a id="repo" name="repo"></a> repo

• **repo**: `string`

name of the repo

#### Defined in

base/repository/repo-list-stargazers.ts:8