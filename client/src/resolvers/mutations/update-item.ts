import { gql } from 'apollo-boost'
import { useMutation, MutationHookOptions } from '@apollo/react-hooks'

import { UpdateItem, UpdateItemVariables } from './types'

const UPDATE_ITEM = gql`
  mutation UpdateItem(
    $id: ID!
    $name: String
    $description: String
    $price: Int
    $images: [String]!
  ) {
    updateItem(
      data: {
        id: $id
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

const useUpdateItem = (
  options?: MutationHookOptions<UpdateItem, UpdateItemVariables>
) => useMutation<UpdateItem, UpdateItemVariables>(UPDATE_ITEM, options)

export default useUpdateItem
