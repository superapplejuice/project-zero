import { gql } from 'apollo-boost'
import { useMutation, MutationHookOptions } from '@apollo/react-hooks'

import { RegisterUser, RegisterUserVariables } from './types'

const REGISTER_USER = gql`
  mutation RegisterUser(
    $username: String!
    $email: String!
    $password: String!
  ) {
    registerUser(
      data: { username: $username, email: $email, password: $password }
    ) {
      id
    }
  }
`

const useRegisterUser = (
  options?: MutationHookOptions<RegisterUser, RegisterUserVariables>
) => useMutation<RegisterUser, RegisterUserVariables>(REGISTER_USER, options)

export default useRegisterUser
