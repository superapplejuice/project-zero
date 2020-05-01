import { gql } from 'apollo-boost'
import { useMutation, MutationHookOptions } from '@apollo/react-hooks'

import { AddToCart, AddToCartVariables } from './types'

const ADD_TO_CART = gql`
  mutation AddToCart($id: ID!) {
    addToCart(id: $id) {
      user {
        id
      }
      items {
        id
        name
        images
      }
    }
  }
`

const useAddToCart = (
  options?: MutationHookOptions<AddToCart, AddToCartVariables>
) => useMutation<AddToCart, AddToCartVariables>(ADD_TO_CART, options)

export default useAddToCart
