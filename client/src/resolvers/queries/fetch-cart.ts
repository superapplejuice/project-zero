import { gql } from 'apollo-boost'
import { useQuery, QueryHookOptions } from '@apollo/react-hooks'

import { FetchCart, FetchCartVariables } from './types'

export const FETCH_CART = gql`
  query FetchCart($id: ID!) {
    fetchCart(id: $id) {
      items {
        id
        name
        images
      }
    }
  }
`

export const useFetchCart = (
  options?: QueryHookOptions<FetchCart, FetchCartVariables>
) => useQuery<FetchCart, FetchCartVariables>(FETCH_CART, options)
