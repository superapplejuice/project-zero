/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: RemoveFromCart
// ====================================================

export interface RemoveFromCart_removeFromCart_item {
  __typename: 'Item'
  id: string
  name: string
  images: string[]
  price: number
}

export interface RemoveFromCart_removeFromCart {
  __typename: 'CartItem'
  id: string
  item: RemoveFromCart_removeFromCart_item
}

export interface RemoveFromCart {
  removeFromCart: RemoveFromCart_removeFromCart | null
}

export interface RemoveFromCartVariables {
  id: string
}
