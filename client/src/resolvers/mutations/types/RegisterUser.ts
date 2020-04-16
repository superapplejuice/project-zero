/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: RegisterUser
// ====================================================

export interface RegisterUser_registerUser {
  __typename: 'User'
  id: string
}

export interface RegisterUser {
  registerUser: RegisterUser_registerUser
}

export interface RegisterUserVariables {
  username: string
  email: string
  password: string
}
