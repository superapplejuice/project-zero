/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: FetchCurrentUser
// ====================================================

export interface FetchCurrentUser_fetchCurrentUser_items {
  __typename: 'Item'
  id: string
}

export interface FetchCurrentUser_fetchCurrentUser_cart {
  __typename: 'CartItem'
  id: string
}

export interface FetchCurrentUser_fetchCurrentUser {
  __typename: 'User'
  id: string
  email: string
  username: string
  createdAt: any
  items: FetchCurrentUser_fetchCurrentUser_items[] | null
  cart: FetchCurrentUser_fetchCurrentUser_cart[] | null
}

export interface FetchCurrentUser {
  fetchCurrentUser: FetchCurrentUser_fetchCurrentUser | null
}
