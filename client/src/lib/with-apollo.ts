import withApollo from 'next-with-apollo'
import ApolloClient, { InMemoryCache } from 'apollo-boost'
import { getDataFromTree } from '@apollo/react-ssr'

import { endpoint } from './config'

export default withApollo(
  ({ initialState, headers }) =>
    new ApolloClient({
      uri: endpoint,
      cache: new InMemoryCache().restore(initialState || {}),
      request: operation => {
        operation.setContext({
          fetchOptions: { credentials: 'include' },
          headers,
        })
      },
    }),
  {
    getDataFromTree: async (tree, ctx) => {
      await getDataFromTree(tree, ctx)
    },
  }
)
