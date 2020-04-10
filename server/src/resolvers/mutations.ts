import { MutationResolvers } from './types'

const Mutation: MutationResolvers = {
  createItem: {
    fragment: '',
    resolve: async (parent, { data }, context, info) =>
      await context.db.mutation.createItem({ data: { ...data } }, info),
  },
}

export default Mutation
