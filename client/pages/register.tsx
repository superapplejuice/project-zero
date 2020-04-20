import React from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { useRouter } from 'next/router'
import Error from 'next/error'

import { useRegisterUser } from 'resolvers/mutations'
import { RegisterUserVariables } from 'resolvers/mutations/types'
import { usernameRegex, passwordRegex } from 'lib/regex'
import { useUserContext } from 'context/user-context'

import { Inputs, Button, ErrorMessage } from 'components/core'
import * as Styles from 'components/styles/register'

const Register = () => {
  const { user } = useUserContext()
  const router = useRouter()

  if (user) {
    return (
      <Error statusCode={403} title="You're not allowed to view this page" />
    )
  }

  const [registerUser, { loading, error }] = useRegisterUser()

  const validationSchema = yup.object<RegisterUserVariables>({
    username: yup
      .string()
      .matches(
        usernameRegex,
        'Your username needs to be between 4 to 15 characters long, and cannot contain special characters!'
      )
      .required('Username is required!'),
    email: yup
      .string()
      .email('Please enter a valid email!')
      .required('Email is required!'),
    password: yup
      .string()
      .matches(
        passwordRegex,
        'Your password needs to be at least 8 characters long, and contains at least one capital letter, one special character, and one number!'
      )
      .required('Password is required!'),
  })

  const handleRegister = async (values: RegisterUserVariables) => {
    const { data } = await registerUser({
      variables: { ...values },
    })

    if (data?.registerUser && !error) {
      return router.push('/login')
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
  } = useFormik<RegisterUserVariables>({
    initialValues: {
      username: '',
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: async values => {
      setSubmitting(true)
      return await handleRegister(values)
    },
  })

  return (
    <Styles.Container>
      <Styles.FormGroup>
        <Styles.Header>Register</Styles.Header>
        <Styles.Form onSubmit={handleSubmit}>
          <Inputs.TextInput
            onBlur={handleBlur}
            onChange={handleChange}
            type="text"
            value={values.username}
            name="username"
            label="Username"
            placeholder="Username"
          >
            {touched.username && errors.username && (
              <Styles.Warning>{errors.username}</Styles.Warning>
            )}
          </Inputs.TextInput>

          <Inputs.TextInput
            onBlur={handleBlur}
            onChange={handleChange}
            type="email"
            value={values.email}
            name="email"
            label="Email"
            placeholder="john_appleseed@example.com"
          >
            {touched.email && errors.email && (
              <Styles.Warning>{errors.email}</Styles.Warning>
            )}
          </Inputs.TextInput>

          <Inputs.TextInput
            onBlur={handleBlur}
            onChange={handleChange}
            type="password"
            value={values.password}
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
            {isSubmitting ? 'Registering...' : 'Register'}
          </Button>
        </Styles.Form>
      </Styles.FormGroup>
    </Styles.Container>
  )
}

export default Register
