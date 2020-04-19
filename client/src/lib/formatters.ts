import moment from 'moment'
import { ApolloError } from 'apollo-boost'

export const formatCurrency = (value: number) =>
  new Intl.NumberFormat('en-SG', {
    style: 'currency',
    currency: 'SGD',
    localeMatcher: 'lookup',
  }).format(value)

export const formatTimeSince = (postTs: string) => {
  const timeSince = moment(new Date(postTs)).fromNow()

  if (timeSince[0] === 'a') {
    return timeSince[0].toUpperCase()
  }

  return timeSince
}

export const formatError = (error: ApolloError) =>
  error.message.replace('GraphQL error: ', '')
