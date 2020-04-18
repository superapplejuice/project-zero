/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: LoginUser
// ====================================================

export interface LoginUser_loginUser {
  __typename: 'User'
  id: string
}

export interface LoginUser {
  loginUser: LoginUser_loginUser
}

export interface LoginUserVariables {
  email: string
  password: string
}
