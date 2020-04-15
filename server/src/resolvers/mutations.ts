import { MutationResolvers } from './types'

const Mutation: MutationResolvers = {
  createItem: {
    fragment: '',
    resolve: async (parent, { data }, context, info) => {
      const { name, description, price, images } = data

      return await context.db.mutation.createItem(
        {
          data: {
            name,
            description,
            price,
            images: {
              set: images,
            },
          },
        },
        info
      )
    },
  },
}

export default Mutation
