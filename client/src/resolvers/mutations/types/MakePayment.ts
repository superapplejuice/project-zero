/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: MakePayment
// ====================================================

export interface MakePayment_makePayment {
  __typename: 'Alert'
  message: string
}

export interface MakePayment {
  makePayment: MakePayment_makePayment
}

export interface MakePaymentVariables {
  amount: number
  paymentMethodId: string
}
