/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: FetchItems
// ====================================================

export interface FetchItems_fetchItems {
  __typename: 'Item'
  id: string
  name: string
  description: string
  price: number
  createdAt: any
  image_1: string
}

export interface FetchItems {
  fetchItems: (FetchItems_fetchItems | null)[]
}

export interface FetchItemsVariables {
  id?: string | null
}
