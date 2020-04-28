import React from 'react'

import { ApolloError } from 'apollo-boost'
import { StripeError } from '@stripe/stripe-js'

import { formatError } from 'lib/formatters'

import * as Styles from './styles'

const ErrorMessage = ({ error }: { error: ApolloError | StripeError }) => (
  <Styles.Container>{formatError(error)}</Styles.Container>
)

export default ErrorMessage
