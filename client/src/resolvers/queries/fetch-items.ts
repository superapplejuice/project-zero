import { gql } from 'apollo-boost'
import {
  useQuery,
  QueryHookOptions,
  useLazyQuery,
  LazyQueryHookOptions,
} from '@apollo/react-hooks'

import { FetchItems, FetchItemsVariables } from './types'

export const FETCH_ITEMS = gql`
  query FetchItems($id: ID, $name: String) {
    fetchItems(data: { where: { id: $id, name_contains: $name } }) {
      id
      name
      description
      price
      images
      createdAt
      user {
        username
      }
    }
  }
`

export const useFetchItems = (
  options?: QueryHookOptions<FetchItems, FetchItemsVariables>
) => useQuery<FetchItems, FetchItemsVariables>(FETCH_ITEMS, options)

export const useLazyFetchItems = (
  options?: LazyQueryHookOptions<FetchItems, FetchItemsVariables>
) => useLazyQuery<FetchItems, FetchItemsVariables>(FETCH_ITEMS, options)
