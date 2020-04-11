import { gql } from 'apollo-boost'
import { useMutation, MutationHookOptions } from '@apollo/react-hooks'

import { CreateItem, CreateItemVariables } from './types'

const CREATE_ITEM = gql`
  mutation CreateItem(
    $name: String!
    $description: String!
    $price: Int!
    $image_1: String!
    $image_2: String
    $image_3: String
    $image_4: String
  ) {
    createItem(
      data: {
        name: $name
        description: $description
        price: $price
        image_1: $image_1
        image_2: $image_2
        image_3: $image_3
        image_4: $image_4
      }
    ) {
      id
      name
      description
      price
      createdAt
    }
  }
`

const useCreateItem = (
  options: MutationHookOptions<CreateItem, CreateItemVariables>
) => useMutation<CreateItem, CreateItemVariables>(CREATE_ITEM, options)

export default useCreateItem
