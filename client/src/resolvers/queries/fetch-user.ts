import { gql } from 'apollo-boost'
import { useQuery, QueryHookOptions } from '@apollo/react-hooks'

import { FetchUser } from './types'

export const FETCH_USER = gql`
  query FetchUser {
    fetchUser {
      id
      email
      username
      createdAt
    }
  }
`

export const useFetchUser = (options?: QueryHookOptions<FetchUser>) =>
  useQuery<FetchUser>(FETCH_USER, options)
