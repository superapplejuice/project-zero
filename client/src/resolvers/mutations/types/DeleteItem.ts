/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: DeleteItem
// ====================================================

export interface DeleteItem_deleteItem_user {
  __typename: 'User'
  id: string
}

export interface DeleteItem_deleteItem {
  __typename: 'Item'
  id: string
  user: DeleteItem_deleteItem_user
}

export interface DeleteItem {
  deleteItem: DeleteItem_deleteItem | null
}

export interface DeleteItemVariables {
  id: string
}
