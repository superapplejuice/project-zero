import moment from 'moment'

import { ApolloError } from 'apollo-boost'
import { StripeError } from '@stripe/stripe-js'

export const formatCurrency = (value: number) =>
  new Intl.NumberFormat('en-SG', {
    style: 'currency',
    currency: 'SGD',
    currencyDisplay: 'code',
  }).format(value)

export const formatTimeSince = (postTs: string) =>
  moment(new Date(postTs)).fromNow()

export const formatError = (error: ApolloError | StripeError) => {
  if (error.message.includes('GraphQL')) {
    return error.message.replace('GraphQL error: ', '')
  }

  return error.message
}
