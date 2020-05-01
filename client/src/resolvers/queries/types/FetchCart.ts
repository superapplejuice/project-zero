/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: FetchCart
// ====================================================

export interface FetchCart_fetchCart_user {
  __typename: 'User'
  id: string
}

export interface FetchCart_fetchCart_items {
  __typename: 'Item'
  id: string
}

export interface FetchCart_fetchCart {
  __typename: 'Cart'
  user: FetchCart_fetchCart_user | null
  items: FetchCart_fetchCart_items[] | null
}

export interface FetchCart {
  fetchCart: FetchCart_fetchCart | null
}

export interface FetchCartVariables {
  id: string
}
