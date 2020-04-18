import { gql } from 'apollo-boost'
import { useMutation, MutationHookOptions } from '@apollo/react-hooks'

import { LogoutUser } from './types'

const LOGOUT_USER = gql`
  mutation LogoutUser {
    logoutUser {
      message
      error
    }
  }
`

const useLogout = (options?: MutationHookOptions<LogoutUser>) =>
  useMutation<LogoutUser>(LOGOUT_USER, options)

export default useLogout
