import { gql } from 'apollo-boost'
import { useMutation, MutationHookOptions } from '@apollo/react-hooks'

import { AddToCart, AddToCartVariables } from './types'

const ADD_TO_CART = gql`
  mutation AddToCart($id: ID!) {
    addToCart(id: $id) {
      id
      item {
        id
        name
        images
        price
      }
    }
  }
`

const useAddToCart = (
  options?: MutationHookOptions<AddToCart, AddToCartVariables>
) => useMutation<AddToCart, AddToCartVariables>(ADD_TO_CART, options)

export default useAddToCart
