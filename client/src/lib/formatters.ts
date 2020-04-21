import moment from 'moment'
import { ApolloError } from 'apollo-boost'

export const formatCurrency = (value: number) =>
  new Intl.NumberFormat('en-SG', {
    style: 'currency',
    currency: 'SGD',
    currencyDisplay: 'code',
  }).format(value)

export const formatTimeSince = (postTs: string) =>
  moment(new Date(postTs)).fromNow()

export const formatError = (error: ApolloError) =>
  error.message.replace('GraphQL error: ', '')
