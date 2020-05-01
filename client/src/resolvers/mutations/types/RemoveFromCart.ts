/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: RemoveFromCart
// ====================================================

export interface RemoveFromCart_removeFromCart_user {
  __typename: 'User'
  id: string
}

export interface RemoveFromCart_removeFromCart_items {
  __typename: 'Item'
  id: string
}

export interface RemoveFromCart_removeFromCart {
  __typename: 'Cart'
  user: RemoveFromCart_removeFromCart_user | null
  items: RemoveFromCart_removeFromCart_items[] | null
}

export interface RemoveFromCart {
  removeFromCart: RemoveFromCart_removeFromCart | null
}

export interface RemoveFromCartVariables {
  id: string
}
