import { gql } from 'apollo-boost'
import { useMutation, MutationHookOptions } from '@apollo/react-hooks'

import { MakePayment, MakePaymentVariables } from './types'

const MAKE_PAYMENT = gql`
  mutation MakePayment($amount: Int!, $paymentMethodId: String!) {
    makePayment(data: { amount: $amount, paymentMethodId: $paymentMethodId }) {
      message
    }
  }
`

const useMakePayment = (
  options?: MutationHookOptions<MakePayment, MakePaymentVariables>
) => useMutation<MakePayment, MakePaymentVariables>(MAKE_PAYMENT, options)

export default useMakePayment
