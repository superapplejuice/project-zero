import React from 'react'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import { UniversalPortal } from '@jesstelford/react-portal-universal'

import { StripeCardElementOptions } from '@stripe/stripe-js'
import { Props } from './types'

import { useUserContext } from 'context/user-context'
import { formatCurrency } from 'lib/formatters'

import { Button } from 'components/core'
import * as Styles from './styles'

const Checkout = ({ closeCheckout, displayCheckout, item }: Props) => {
  const stripe = useStripe()
  const elements = useElements()

  const { user } = useUserContext()

  const options: StripeCardElementOptions = {
    hidePostalCode: true,
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const { paymentMethod, error } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
      billing_details: { email: user?.email },
    })

    return error ? console.log(error) : console.log(paymentMethod)
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
          <Styles.ButtonsContainer>
            <Button type="button" onClick={closeCheckout} color="yellow">
              Cancel
            </Button>
            <Button
              type="submit"
              onClick={handleSubmit}
              disabled={!stripe}
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
