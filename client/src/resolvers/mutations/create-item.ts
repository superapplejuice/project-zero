import { gql } from 'apollo-boost'
import { useMutation, MutationHookOptions } from '@apollo/react-hooks'

import { CreateItem, CreateItemVariables } from './types'

const CREATE_ITEM = gql`
  mutation CreateItem(
    $name: String!
    $description: String!
    $price: Int!
    $images: [String!]!
  ) {
    createItem(
      data: {
        name: $name
        description: $description
        price: $price
        images: $images
      }
    ) {
      id
    }
  }
`

const useCreateItem = (
  options?: MutationHookOptions<CreateItem, CreateItemVariables>
) => useMutation<CreateItem, CreateItemVariables>(CREATE_ITEM, options)

export default useCreateItem
