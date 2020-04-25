import { gql } from 'apollo-boost'
import { useQuery, QueryHookOptions } from '@apollo/react-hooks'

import { FetchItem, FetchItemVariables } from './types'

export const FETCH_ITEM = gql`
  query FetchItem($id: ID!) {
    fetchItem(id: $id) {
      id
      name
      description
      price
      createdAt
      images
      user {
        id
        username
      }
    }
  }
`

export const useFetchItem = (
  options: QueryHookOptions<FetchItem, FetchItemVariables>
) => useQuery<FetchItem, FetchItemVariables>(FETCH_ITEM, options)
