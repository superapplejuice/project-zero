/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: ClearCart
// ====================================================

export interface ClearCart_clearCart_item {
  __typename: 'Item'
  id: string
}

export interface ClearCart_clearCart {
  __typename: 'CartItem'
  id: string
  item: ClearCart_clearCart_item
}

export interface ClearCart {
  clearCart: (ClearCart_clearCart | null)[]
}
