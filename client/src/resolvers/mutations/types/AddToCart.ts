/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: AddToCart
// ====================================================

export interface AddToCart_addToCart_item {
  __typename: 'Item'
  id: string
  name: string
  images: string[]
  price: number
}

export interface AddToCart_addToCart {
  __typename: 'CartItem'
  id: string
  item: AddToCart_addToCart_item
}

export interface AddToCart {
  addToCart: AddToCart_addToCart
}

export interface AddToCartVariables {
  id: string
}
