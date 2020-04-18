import { gql } from 'apollo-boost'
import { useMutation, MutationHookOptions } from '@apollo/react-hooks'

import { LoginUser, LoginUserVariables } from './types'

const LOGIN_USER = gql`
  mutation LoginUser($email: String!, $password: String!) {
    loginUser(data: { email: $email, password: $password }) {
      id
    }
  }
`

const useLogin = (
  options?: MutationHookOptions<LoginUser, LoginUserVariables>
) => useMutation<LoginUser, LoginUserVariables>(LOGIN_USER, options)

export default useLogin
