import { gql } from 'apollo-boost'
import { useMutation, MutationHookOptions } from '@apollo/react-hooks'

import { RemoveFromCart, RemoveFromCartVariables } from './types'

const REMOVE_FROM_CART = gql`
  mutation RemoveFromCart($id: ID!) {
    removeFromCart(id: $id) {
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

const useRemoveFromCart = (
  options?: MutationHookOptions<RemoveFromCart, RemoveFromCartVariables>
) =>
  useMutation<RemoveFromCart, RemoveFromCartVariables>(
    REMOVE_FROM_CART,
    options
  )

export default useRemoveFromCart
