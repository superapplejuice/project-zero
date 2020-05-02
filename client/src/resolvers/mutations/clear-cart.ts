import { gql } from 'apollo-boost'
import { useMutation, MutationHookOptions } from '@apollo/react-hooks'

import { ClearCart } from './types'

const CLEAR_CART = gql`
  mutation ClearCart {
    clearCart {
      id
      item {
        id
      }
    }
  }
`

const useClearCart = (options?: MutationHookOptions<ClearCart>) =>
  useMutation<ClearCart>(CLEAR_CART, options)

export default useClearCart
