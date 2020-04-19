/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UpdateItem
// ====================================================

export interface UpdateItem_updateItem {
  __typename: 'Item'
  id: string
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
