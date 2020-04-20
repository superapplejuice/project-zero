import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { useRouter } from 'next/router'
import Error from 'next/error'

import { Upload } from 'components/dropzone/types'
import { CreateItemVariables } from 'resolvers/mutations/types'
import { useCreateItem } from 'resolvers/mutations'
import { useUserContext } from 'context/user-context'

import Dropzone from 'components/dropzone'
import { Button, Inputs, ErrorMessage } from 'components/core'
import * as Styles from 'components/styles/sell'

const Sell = () => {
  const { user } = useUserContext()

  if (!user) {
    return (
      <Error
        statusCode={401}
        title="You need to be logged in to see this page"
      />
    )
  }

  const router = useRouter()
  const [uploads, setUploads] = useState<Upload[]>(null)
  const [createItem, { loading, error }] = useCreateItem({
    refetchQueries: ['FetchItems'],
    awaitRefetchQueries: true,
  })

  const validationSchema = yup.object<CreateItemVariables>({
    name: yup
      .string()
      .min(4, 'Enter at least 4 characters')
      .max(64, 'Maximum of 64 characters!')
      .required('Enter the name of your item'),
    description: yup
      .string()
      .min(4, 'Enter at least 4 characters')
      .required('Enter a description of your item'),
    price: yup
      .number()
      .min(1, 'Enter at least $1!')
      .max(999999999, 'Come on dude no one is buying THAT.')
      .required('Please enter a price'),
    images: yup.array(),
  })

  const handleFormSubmit = async (values: CreateItemVariables) => {
    const uploadData = await Promise.all(
      uploads.map(async file => {
        const data = new FormData()
        data.append('file', file)
        data.append('upload_preset', 'project_zero')

        const res = await fetch(
          'https://api.cloudinary.com/v1_1/dqtm4x8vx/image/upload',
          {
            method: 'POST',
            body: data,
          }
        )
        const upload = await res.json()

        return upload.secure_url
      })
    )

    const { data } = await createItem({
      variables: { ...values, images: uploadData },
    })
    const href = '/item/[id]'
    const id = data?.createItem?.id

    return router.push(href, href.replace('[id]', `${id}`))
  }

  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    isSubmitting,
    setSubmitting,
    touched,
    errors,
  } = useFormik<CreateItemVariables>({
    initialValues: {
      name: '',
      description: '',
      price: undefined,
      images: [],
    },
    validationSchema,
    onSubmit: async values => {
      setSubmitting(true)
      return await handleFormSubmit(values)
    },
  })

  return (
    <Styles.Container>
      <Styles.Header>What are you selling today?</Styles.Header>
      <Styles.Form onSubmit={handleSubmit}>
        <Styles.FieldGroup>
          <Styles.FieldHeader>Basic Information</Styles.FieldHeader>

          <Inputs.TextInput
            onChange={handleChange}
            onBlur={handleBlur}
            name="name"
            type="text"
            value={values.name}
            highlight="blue"
            label="Name"
            placeholder="Name"
          >
            {touched.name && errors.name && (
              <Styles.Warning>{errors.name}</Styles.Warning>
            )}
          </Inputs.TextInput>

          <Inputs.TextArea
            onChange={handleChange}
            onBlur={handleBlur}
            name="description"
            type="text"
            value={values.description}
            highlight="blue"
            label="Description"
            placeholder="Description"
          >
            {touched.description && errors.description && (
              <Styles.Warning>{errors.description}</Styles.Warning>
            )}
          </Inputs.TextArea>

          <Inputs.TextInput
            onChange={handleChange}
            onBlur={handleBlur}
            name="price"
            type="number"
            value={values.price}
            highlight="blue"
            label="Price"
            placeholder="0"
          >
            {touched.price && errors.price && (
              <Styles.Warning>{errors.price}</Styles.Warning>
            )}
          </Inputs.TextInput>

          {error && <ErrorMessage error={error} />}
          <Button
            onClick={handleSubmit}
            disabled={isSubmitting || !uploads || loading || !errors}
            color="blue"
            type="submit"
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </Button>
        </Styles.FieldGroup>
        <Styles.FieldGroup>
          <Styles.FieldHeader>
            What does your item look like?
          </Styles.FieldHeader>

          <Dropzone setUploads={setUploads} />
        </Styles.FieldGroup>
      </Styles.Form>
    </Styles.Container>
  )
}

export default Sell
