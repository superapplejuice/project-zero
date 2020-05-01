import { gql } from 'apollo-boost'
import { useQuery, QueryHookOptions } from '@apollo/react-hooks'

import { FetchCurrentUser } from './types'

export const FETCH_CURRENT_USER = gql`
  query FetchCurrentUser {
    fetchCurrentUser {
      id
      email
      username
      createdAt
      items {
        id
      }
      cart {
        id
      }
    }
  }
`

export const useFetchCurrentUser = (
  options?: QueryHookOptions<FetchCurrentUser>
) => useQuery<FetchCurrentUser>(FETCH_CURRENT_USER, options)
