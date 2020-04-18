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
  fetchUser: {
    fragment: '',
    resolve: async (parent, args, context, info) => {
      if (!context.request.userId) {
        return null
      }

      return await context.db.query.user(
        {
          where: {
            id: context.request.userId,
          },
        },
        info
      )
    },
  },
}

export default Query
