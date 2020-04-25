/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UpdateItem
// ====================================================

export interface UpdateItem_updateItem_user {
  __typename: 'User'
  id: string
  username: string
}

export interface UpdateItem_updateItem {
  __typename: 'Item'
  id: string
  name: string
  description: string
  price: number
  images: string[]
  createdAt: any
  updatedAt: any
  user: UpdateItem_updateItem_user
}

export interface UpdateItem {
  updateItem: UpdateItem_updateItem
}

export interface UpdateItemVariables {
  id: string
  name?: string | null
  description?: string | null
  price?: number | null
  images: (string | null)[]
}
