import { gql } from 'apollo-boost'
import { useQuery, QueryHookOptions } from '@apollo/react-hooks'

import { FetchCart } from './types'

export const FETCH_CART = gql`
  query FetchCart {
    fetchCart {
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

export const useFetchCart = (options?: QueryHookOptions<FetchCart>) =>
  useQuery<FetchCart>(FETCH_CART, options)
