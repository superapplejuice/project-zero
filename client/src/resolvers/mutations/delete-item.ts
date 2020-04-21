import { gql } from 'apollo-boost'
import { useMutation, MutationHookOptions } from '@apollo/react-hooks'

import { DeleteItem, DeleteItemVariables } from './types'

const DELETE_ITEM = gql`
  mutation DeleteItem($id: ID!) {
    deleteItem(id: $id) {
      error
    }
  }
`

const useDeleteItem = (
  options?: MutationHookOptions<DeleteItem, DeleteItemVariables>
) => useMutation<DeleteItem, DeleteItemVariables>(DELETE_ITEM, options)

export default useDeleteItem
