import { hash, compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'
import Stripe from 'stripe'

import { CookieOptions } from 'express'
import { MutationResolvers } from './types'

import { itemConnect, cartItemConnect } from './connect'
import { usernameRegex, passwordRegex } from '../utils/regex'
import {
  requireAuth,
  wrongCredentials,
  noItem,
  notOwner,
  invalidUsername,
  invalidPassword,
} from '../utils/messages'

const cookieOptions: CookieOptions = {
  httpOnly: true,
  maxAge: 1000 * 60 * 60 * 24 * 7,
}

const stripe = new Stripe(process.env.STRIPE_SKEY, {
  apiVersion: '2020-03-02',
  typescript: true,
})

const Mutation: MutationResolvers = {
  /* item mutations */
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
      const { id, name, description, price, images } = data
      const itemToUpdate = await context.db.query.item(
        { where: { id } },
        itemConnect
      )

      if (!itemToUpdate) {
        throw new Error(noItem)
      }

      if (!context.request.userId) {
        throw new Error(requireAuth)
      }

      if (itemToUpdate.user.id !== context.request.userId) {
        throw new Error(notOwner)
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
  deleteItem: {
    fragment: '',
    resolve: async (_parent, { id }, context, info) => {
      const itemToDelete = await context.db.query.item(
        { where: { id } },
        itemConnect
      )

      if (!itemToDelete) {
        throw new Error(noItem)
      }

      if (!context.request.userId) {
        throw new Error(requireAuth)
      }

      if (itemToDelete.user.id !== context.request.userId) {
        throw new Error(notOwner)
      }

      await context.db.mutation.deleteItem({ where: { id } }, info)

      return itemToDelete
    },
  },
  /* user mutations */
  registerUser: {
    fragment: '',
    resolve: async (_parent, { data }, context, info) => {
      const { username, email, password } = data

      if (!username.match(usernameRegex)) {
        throw new Error(invalidUsername)
      }

      if (!password.match(passwordRegex)) {
        throw new Error(invalidPassword)
      }

      const parsedUsername = `@${username.toLowerCase()}`
      const existingUsername = await context.db.query.user({
        where: { username: parsedUsername },
      })
      if (existingUsername) {
        throw new Error('Username already taken!')
      }

      const parsedEmail = email.toLowerCase()
      const existingEmail = await context.db.query.user({
        where: { email: parsedEmail },
      })
      if (existingEmail) {
        throw new Error('Email already taken!')
      }

      const hashedPassword = await hash(password, 12)

      return await context.db.mutation.createUser(
        {
          data: {
            username: parsedUsername,
            email: parsedEmail,
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
      const parsedEmail = email.toLowerCase()

      const existingUser = await context.db.query.user({
        where: { email: parsedEmail },
      })
      if (!existingUser) {
        throw new Error(wrongCredentials)
      }

      const correctPassword = await compare(password, existingUser.password)
      if (!correctPassword) {
        throw new Error(wrongCredentials)
      }

      const token = sign({ userId: existingUser.id }, process.env.APP_SECRET)
      context.response.cookie('token', token, cookieOptions)

      return existingUser
    },
  },
  logoutUser: {
    fragment: '',
    resolve: (_parent, _args, context, _info) => {
      context.response.clearCookie('token')

      return { message: 'Logged out successfully!' }
    },
  },
  /* payment mutations */
  makePayment: {
    fragment: '',
    resolve: async (_parent, { data }, _context, _info) => {
      const { amount, paymentMethodId } = data

      const intent = await stripe.paymentIntents.create({
        amount,
        currency: 'sgd',
        payment_method: paymentMethodId,
      })

      if (!intent || !intent.client_secret) {
        throw new Error('Payment failed!')
      }

      return { message: intent.client_secret }
    },
  },
  /* cart mutations */
  addToCart: {
    fragment: '',
    resolve: async (_parent, { id }, context, info) => {
      if (!context.request.userId) {
        throw new Error(requireAuth)
      }

      const userCart = await context.db.query.cartItems(
        {
          where: {
            user: { id: context.request.userId },
            item: { id },
          },
        },
        cartItemConnect
      )
      const existingItem = userCart.find(cartItem => cartItem.item.id === id)

      if (existingItem) {
        return existingItem
      }

      return await context.db.mutation.createCartItem(
        {
          data: {
            user: {
              connect: { id: context.request.userId },
            },
            item: {
              connect: { id },
            },
          },
        },
        info
      )
    },
  },
  removeFromCart: {
    fragment: '',
    resolve: async (_parent, { id }, context, info) => {
      if (!context.request.userId) {
        throw new Error(requireAuth)
      }

      const itemToRemove = await context.db.query.cartItem(
        { where: { id } },
        cartItemConnect
      )

      if (itemToRemove.user.id !== context.request.userId) {
        throw new Error('That cart item does not belong to you!')
      }

      const userCart = await context.db.query.cartItems(
        { where: { user: { id: context.request.userId } } },
        cartItemConnect
      )
      const itemInCart = userCart.filter(item => item.id === itemToRemove.id)

      if (!itemInCart) {
        throw new Error('That item does not exist in your cart!')
      }

      return await context.db.mutation.deleteCartItem(
        {
          where: { id: itemToRemove.id },
        },
        info
      )
    },
  },
}

export default Mutation
