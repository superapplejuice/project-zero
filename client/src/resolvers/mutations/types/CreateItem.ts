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
  images: string[]
  createdAt: any
}

export interface CreateItem {
  createItem: CreateItem_createItem
}

export interface CreateItemVariables {
  name: string
  description: string
  price: number
  images: string[]
}
