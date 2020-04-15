import { gql } from 'apollo-boost'
import { useQuery, QueryHookOptions } from '@apollo/react-hooks'

import { FetchItems, FetchItemsVariables } from './types'

const FETCH_ITEMS = gql`
  query FetchItems($id: ID) {
    fetchItems(data: { where: { id: $id } }) {
      id
      name
      description
      price
      images
      createdAt
    }
  }
`

const useFetchItems = (
  options?: QueryHookOptions<FetchItems, FetchItemsVariables>
) => useQuery<FetchItems, FetchItemsVariables>(FETCH_ITEMS, options)

export default useFetchItems
