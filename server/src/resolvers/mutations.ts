import { hash } from 'bcryptjs'

import { MutationResolvers } from './types'
import { usernameRegex, passwordRegex } from '../utils/regex'

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
  registerUser: {
    fragment: '',
    resolve: async (parent, { data }, context, info) => {
      const { username, email, password } = data

      if (!username.match(usernameRegex)) {
        throw new Error(
          'Username needs to be between 4 to 15 characters long, and cannot contain special characters!'
        )
      }

      if (!password.match(passwordRegex)) {
        throw new Error(
          'Password needs to be at least 8 characters long, and contains at least one capital letter, one special character, and one number!'
        )
      }

      const parsedUsername = `@${username.toLowerCase()}`

      const existingUsername = await context.db.query.user({
        where: { username: parsedUsername },
      })
      if (existingUsername) {
        throw new Error('Username already taken!')
      }

      const existingEmail = await context.db.query.user({
        where: { email },
      })
      if (existingEmail) {
        throw new Error('Email already taken!')
      }

      const hashedPassword = await hash(password, 12)

      return await context.db.mutation.createUser(
        {
          data: {
            username: parsedUsername,
            email,
            password: hashedPassword,
          },
        },
        info
      )
    },
  },
}

export default Mutation
