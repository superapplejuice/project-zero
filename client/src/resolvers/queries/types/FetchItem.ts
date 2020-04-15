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
  image_1: string
  image_2: string | null
  image_3: string | null
  image_4: string | null
}

export interface FetchItem {
  fetchItem: FetchItem_fetchItem
}

export interface FetchItemVariables {
  id: string
}
