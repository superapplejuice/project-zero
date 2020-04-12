import React, { useState } from 'react'
import { useFormik } from 'formik'

import { Upload } from 'components/dropzone/types'
import { CreateItemVariables } from 'resolvers/mutations/types'
import { useCreateItem } from 'resolvers/mutations'

import Dropzone from 'components/dropzone'
import { Button, TextInput } from 'components/core'

import * as Styles from 'components/sell/styles'

const Sell = () => {
  const [uploads, setUploads] = useState<Upload[]>(null)
  const [createItem, { loading }] = useCreateItem()

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

        return upload
      })
    )

    values.image_1 = uploadData[0].secure_url
    values.image_2 = uploadData[1]?.secure_url
    values.image_3 = uploadData[2]?.secure_url
    values.image_4 = uploadData[3]?.secure_url

    return createItem({
      variables: { ...values },
    })
  }

  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    isSubmitting,
    setSubmitting,
  } = useFormik<CreateItemVariables>({
    initialValues: {
      name: '',
      description: '',
      price: undefined,
      image_1: '',
      image_2: null,
      image_3: null,
      image_4: null,
    },
    onSubmit: async values => {
      setSubmitting(true)
      await handleFormSubmit(values)
      setSubmitting(false)
    },
  })

  return (
    <div>
      <div>Sell your item!</div>
      <Styles.Form onSubmit={handleSubmit}>
        <TextInput
          onChange={handleChange}
          onBlur={handleBlur}
          name="name"
          type="text"
          value={values.name}
          highlight="blue"
          label="Name"
          placeholder="Name"
        />
        <TextInput
          onChange={handleChange}
          onBlur={handleBlur}
          name="description"
          type="text"
          value={values.description}
          highlight="blue"
          label="Description"
          placeholder="Description"
        />
        <TextInput
          onChange={handleChange}
          onBlur={handleBlur}
          name="price"
          type="number"
          value={values.price}
          highlight="blue"
          label="Price"
          placeholder="0"
        />
        <Dropzone setUploads={setUploads} />
        <Button
          onClick={handleSubmit}
          disabled={isSubmitting || !uploads || loading}
          color="blue"
          type="submit"
        >
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </Button>
      </Styles.Form>
    </div>
  )
}

export default Sell
