/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: FetchUser
// ====================================================

export interface FetchUser_fetchUser_items {
  __typename: 'Item'
  id: string
}

export interface FetchUser_fetchUser_cart {
  __typename: 'Cart'
  id: string
}

export interface FetchUser_fetchUser {
  __typename: 'User'
  id: string
  email: string
  username: string
  createdAt: any
  items: FetchUser_fetchUser_items[] | null
  cart: FetchUser_fetchUser_cart
}

export interface FetchUser {
  fetchUser: FetchUser_fetchUser | null
}

export interface FetchUserVariables {
  id: string
}
