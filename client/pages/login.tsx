import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { useRouter } from 'next/router'

import { useUserContext } from 'context/user-context'
import { useLogin } from 'resolvers/mutations'
import { LoginUserVariables } from 'resolvers/mutations/types'
import { GraphQLError } from 'graphql'

import { Inputs, Button } from 'components/core'
import * as Styles from 'components/styles/login'

const Login = () => {
  const { user } = useUserContext()
  const router = useRouter()

  if (user) {
    return router.push('/')
  }

  const [submitErrors, setSubmitErrors] = useState<GraphQLError[]>(null)
  const [login, { loading }] = useLogin({
    refetchQueries: ['FetchUser'],
    awaitRefetchQueries: true,
  })

  const validationSchema = yup.object<LoginUserVariables>({
    email: yup
      .string()
      .email('Please enter a valid emaail')
      .required('Please enter your email'),
    password: yup.string().required('Please enter your password'),
  })

  const handleLogin = async (values: LoginUserVariables) => {
    const { data, errors } = await login({
      variables: { ...values },
    })

    if (data?.loginUser && !errors) {
      return router.push('/')
    }

    return setSubmitErrors(errors)
  }

  const {
    setSubmitting,
    handleSubmit,
    handleBlur,
    handleChange,
    values,
    touched,
    errors,
    isSubmitting,
  } = useFormik<LoginUserVariables>({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: async values => {
      setSubmitting(true)
      return await handleLogin(values)
    },
  })

  return (
    <Styles.Container>
      {submitErrors &&
        submitErrors.map((error, i) => (
          <Styles.Warning key={i}>{error.message}</Styles.Warning>
        ))}
      <Styles.FormGroup>
        <Styles.Header>Login</Styles.Header>
        <Styles.Form onSubmit={handleSubmit}>
          <Inputs.TextInput
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            type="email"
            name="email"
            label="Email"
            placeholder="Email"
          >
            {touched.email && errors.email && (
              <Styles.Warning>{errors.email}</Styles.Warning>
            )}
          </Inputs.TextInput>
          <Inputs.TextInput
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
            type="password"
            name="password"
            label="Password"
            placeholder="Password"
          >
            {touched.password && errors.password && (
              <Styles.Warning>{errors.password}</Styles.Warning>
            )}
          </Inputs.TextInput>
          <Button
            onClick={handleSubmit}
            disabled={isSubmitting || loading}
            type="submit"
          >
            {isSubmitting ? 'Logging in...' : 'Login'}
          </Button>
        </Styles.Form>
      </Styles.FormGroup>
    </Styles.Container>
  )
}

export default Login
