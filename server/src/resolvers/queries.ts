import { QueryResolvers } from './types'

import { requireAuth } from '../utils/messages'

const Query: QueryResolvers = {
  /* item queries */
  fetchItems: {
    fragment: '',
    resolve: async (parent, { data }, context, info) =>
      await context.db.query.items({ ...data }, info),
  },
  fetchItem: {
    fragment: '',
    resolve: async (parent, { id }, context, info) => {
      const fetchedItem = await context.db.query.item(
        {
          where: { id },
        },
        info
      )

      if (!fetchedItem) {
        throw new Error('Item does not exist!')
      }

      return fetchedItem
    },
  },
  /* user queries */
  fetchCurrentUser: {
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
  fetchUser: {
    fragment: '',
    resolve: async (parent, { id }, context, info) => {
      const fetchedUser = await context.db.query.user({ where: { id } }, info)

      if (!fetchedUser) {
        throw new Error('User does not exist!')
      }

      return fetchedUser
    },
  },
  /* cart queries */
  fetchCart: {
    fragment: '',
    resolve: async (parent, { id }, context, info) => {
      if (!context.request.userId) {
        throw new Error(requireAuth)
      }

      return await context.db.query.cart(
        {
          where: { id },
        },
        info
      )
    },
  },
}

export default Query
