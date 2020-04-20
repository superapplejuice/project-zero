/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: FetchItems
// ====================================================

export interface FetchItems_fetchItems_user {
  __typename: 'User'
  username: string
}

export interface FetchItems_fetchItems {
  __typename: 'Item'
  id: string
  name: string
  description: string
  price: number
  images: string[]
  createdAt: any
  user: FetchItems_fetchItems_user
}

export interface FetchItems {
  fetchItems: (FetchItems_fetchItems | null)[]
}

export interface FetchItemsVariables {
  id?: string | null
}
