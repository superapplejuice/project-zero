/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateItem
// ====================================================

export interface CreateItem_createItem {
  __typename: 'Item'
  id: string
  name: string
  description: string
  price: number
  createdAt: any
}

export interface CreateItem {
  createItem: CreateItem_createItem
}

export interface CreateItemVariables {
  name: string
  description: string
  price: number
  image_1: string
  image_2?: string | null
  image_3?: string | null
  image_4?: string | null
}
