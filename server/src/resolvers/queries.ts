import { QueryResolvers } from './types'

const Query: QueryResolvers = {
  fetchItems: {
    fragment: '',
    resolve: async (parent, { data }, context, info) =>
      await context.db.query.items({ ...data }, info),
  },
  fetchItem: {
    fragment: '',
    resolve: async (parent, { id }, context, info) =>
      await context.db.query.item(
        {
          where: { id },
        },
        info
      ),
  },
}

export default Query
