import React, { useState } from 'react'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import { UniversalPortal } from '@jesstelford/react-portal-universal'

import { StripeCardElementOptions, StripeError } from '@stripe/stripe-js'
import { ApolloError } from 'apollo-boost'
import { Props } from './types'

import { useUserContext } from 'context/user-context'
import { useMakePayment } from 'resolvers/mutations'
import { formatCurrency } from 'lib/formatters'

import { Button, ErrorMessage } from 'components/core'
import * as Styles from './styles'

const Checkout = ({ closeCheckout, displayCheckout, item }: Props) => {
  const stripe = useStripe()
  const elements = useElements()

  const { user } = useUserContext()
  const [makePayment, { error }] = useMakePayment()

  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<StripeError | ApolloError>(
    null
  )

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitting(true)

    const parsedAmount = item?.price * 100
    const paymentMethod = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
      billing_details: {
        email: user?.email,
        address: {
          country: 'SG',
        },
      },
    })

    if (paymentMethod.error) {
      return setSubmitError(paymentMethod.error)
    }

    const paymentMethodId = paymentMethod.paymentMethod.id
    const { data } = await makePayment({
      variables: {
        amount: parsedAmount,
        paymentMethodId,
      },
    })

    if (error) {
      return setSubmitError(error)
    }

    const clientSecret = data?.makePayment?.message
    const confirmPayment = await stripe.confirmCardPayment(clientSecret)

    if (confirmPayment.error) {
      return confirmPayment.error
    }

    return closeCheckout()
  }

  const options: StripeCardElementOptions = {
    hidePostalCode: true,
  }

  const renderCheckout = () => (
    <UniversalPortal selector="#modal">
      <Styles.Container onClick={closeCheckout}>
        <Styles.CheckoutForm
          onSubmit={handleSubmit}
          onClick={event => event.stopPropagation()}
        >
          <Styles.Header>{item?.name}</Styles.Header>
          <Styles.Price>{formatCurrency(item?.price)}</Styles.Price>
          <CardElement options={options} />

          {submitError && <ErrorMessage error={submitError} />}
          <Styles.ButtonsContainer>
            <Button
              type="button"
              onClick={closeCheckout}
              color="yellow"
              disabled={submitting}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              onClick={handleSubmit}
              disabled={!stripe || submitting}
              color="blue"
            >
              Pay
            </Button>
          </Styles.ButtonsContainer>
        </Styles.CheckoutForm>
      </Styles.Container>
    </UniversalPortal>
  )

  return displayCheckout ? renderCheckout() : null
}

export default Checkout
