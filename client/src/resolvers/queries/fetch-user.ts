import { gql } from 'apollo-boost'
import { useQuery, QueryHookOptions } from '@apollo/react-hooks'

import { FetchUser, FetchUserVariables } from './types'

export const FETCH_USER = gql`
  query FetchUser($id: ID!) {
    fetchUser(id: $id) {
      id
      email
      username
      createdAt
      items {
        id
      }
    }
  }
`

export const useFetchUser = (
  options?: QueryHookOptions<FetchUser, FetchUserVariables>
) => useQuery<FetchUser, FetchUserVariables>(FETCH_USER, options)
