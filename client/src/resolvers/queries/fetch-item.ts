import { gql } from 'apollo-boost'
import { useQuery, QueryHookOptions } from '@apollo/react-hooks'

import { FetchItem, FetchItemVariables } from './types'

const FETCH_ITEM = gql`
  query FetchItem($id: ID!) {
    fetchItem(id: $id) {
      id
      name
      description
      price
      createdAt
      image_1
      image_2
      image_3
      image_4
    }
  }
`

const useFetchItems = (
  options: QueryHookOptions<FetchItem, FetchItemVariables>
) => useQuery<FetchItem, FetchItemVariables>(FETCH_ITEM, options)

export default useFetchItems
