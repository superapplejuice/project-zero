import { QueryResolvers } from './types'

const Query: QueryResolvers = {
  fetchItems: {
    fragment: '',
    resolve: async (parent, { data }, context, info) =>
      await context.db.query.items({ ...data }, info),
  },
}

export default Query
