import { hash, compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'

import { CookieOptions } from 'express'

import { MutationResolvers } from './types'
import { usernameRegex, passwordRegex } from '../utils/regex'
import { requireAuth } from '../utils/messages'

const cookieOptions: CookieOptions = {
  httpOnly: true,
  maxAge: 1000 * 60 * 60 * 24 * 7,
}

const Mutation: MutationResolvers = {
  createItem: {
    fragment: '',
    resolve: async (_parent, { data }, context, info) => {
      if (!context.request.userId) {
        throw new Error(requireAuth)
      }

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
            user: {
              connect: {
                id: context.request.userId,
              },
            },
          },
        },
        info
      )
    },
  },
  updateItem: {
    fragment: '',
    resolve: async (_parent, { data }, context, info) => {
      if (!context.request.userId) {
        throw new Error(requireAuth)
      }

      const { id, name, description, price, images } = data
      const itemToUpdate = await context.db.query.item({ where: { id } })

      if (!itemToUpdate) {
        throw new Error('That item does not exist!')
      }

      if (itemToUpdate.user.id !== context.request.userId) {
        throw new Error('This item does not belong to you!')
      }

      return await context.db.mutation.updateItem(
        {
          data: {
            name,
            description,
            price,
            images: {
              set: images,
            },
          },
          where: { id },
        },
        info
      )
    },
  },
  registerUser: {
    fragment: '',
    resolve: async (_parent, { data }, context, info) => {
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
  loginUser: {
    fragment: '',
    resolve: async (_parent, { data }, context, _info) => {
      const { email, password } = data
      const authError = 'Email or password is incorrect!'

      const existingUser = await context.db.query.user({ where: { email } })
      if (!existingUser) {
        throw new Error(authError)
      }

      const correctPassword = await compare(password, existingUser.password)
      if (!correctPassword) {
        throw new Error(authError)
      }

      // generate JWT token
      const token = sign({ userId: existingUser.id }, process.env.APP_SECRET)
      // set token into req.cookies
      context.response.cookie('token', token, cookieOptions)

      return existingUser
    },
  },
  logoutUser: {
    fragment: '',
    resolve: (_parent, _args, context, _info) => {
      context.response.clearCookie('token')

      return { message: 'Logged out successfully!', error: false }
    },
  },
}

export default Mutation
