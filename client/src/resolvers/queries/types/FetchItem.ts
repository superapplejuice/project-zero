/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: FetchItem
// ====================================================

export interface FetchItem_fetchItem {
  __typename: 'Item'
  id: string
  name: string
  description: string
  price: number
  createdAt: any
  images: string[]
}

export interface FetchItem {
  fetchItem: FetchItem_fetchItem
}

export interface FetchItemVariables {
  id: string
}
