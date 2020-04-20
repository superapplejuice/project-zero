import React from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { useRouter } from 'next/router'
import Error from 'next/error'

import { useUserContext } from 'context/user-context'
import { useLogin } from 'resolvers/mutations'
import { LoginUserVariables } from 'resolvers/mutations/types'

import { Inputs, Button, ErrorMessage } from 'components/core'
import * as Styles from 'components/styles/login'

const Login = () => {
  const { user } = useUserContext()
  const router = useRouter()

  if (user) {
    return <Error statusCode={404} />
  }

  const [login, { loading, error }] = useLogin({
    refetchQueries: ['FetchUser'],
  })

  const validationSchema = yup.object<LoginUserVariables>({
    email: yup
      .string()
      .email('Please enter a valid emaail')
      .required('Please enter your email'),
    password: yup.string().required('Please enter your password'),
  })

  const handleLogin = async (values: LoginUserVariables) => {
    const { data } = await login({
      variables: { ...values },
    })

    if (data?.loginUser && !error) {
      return router.push('/')
    }

    return null
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

          {error && <ErrorMessage error={error} />}
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
