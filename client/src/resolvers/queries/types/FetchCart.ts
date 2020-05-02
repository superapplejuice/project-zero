/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: FetchCart
// ====================================================

export interface FetchCart_fetchCart_item {
  __typename: 'Item'
  id: string
  name: string
  images: string[]
  price: number
}

export interface FetchCart_fetchCart {
  __typename: 'CartItem'
  id: string
  item: FetchCart_fetchCart_item
}

export interface FetchCart {
  fetchCart: (FetchCart_fetchCart | null)[]
}
