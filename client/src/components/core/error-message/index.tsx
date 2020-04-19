import React from 'react'
import { ApolloError } from 'apollo-boost'

import { formatError } from 'lib/formatters'

import * as Styles from './styles'

const ErrorMessage = ({ error }: { error: ApolloError }) => (
  <Styles.Container>{formatError(error)}</Styles.Container>
)

export default ErrorMessage
