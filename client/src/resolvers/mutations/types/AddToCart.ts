/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: AddToCart
// ====================================================

export interface AddToCart_addToCart_user {
  __typename: 'User'
  id: string
}

export interface AddToCart_addToCart_items {
  __typename: 'Item'
  id: string
}

export interface AddToCart_addToCart {
  __typename: 'Cart'
  user: AddToCart_addToCart_user | null
  items: AddToCart_addToCart_items[] | null
}

export interface AddToCart {
  addToCart: AddToCart_addToCart | null
}

export interface AddToCartVariables {
  id: string
}
