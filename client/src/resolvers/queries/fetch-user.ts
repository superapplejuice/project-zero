import { gql } from 'apollo-boost'
import { useQuery, QueryHookOptions } from '@apollo/react-hooks'

import { FetchUser } from './types'

const FETCH_USER = gql`
  query FetchUser {
    fetchUser {
      email
      username
      createdAt
    }
  }
`

const useFetchUser = (options?: QueryHookOptions<FetchUser>) =>
  useQuery<FetchUser>(FETCH_USER, options)

export default useFetchUser
