import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Error from 'next/error'
import { useFormik } from 'formik'
import * as yup from 'yup'

import { MutationUpdaterFn } from 'apollo-boost/src'
import { UpdateItem, UpdateItemVariables } from 'resolvers/mutations/types'
import { FetchItems } from 'resolvers/queries/types'
import { Upload } from 'components/dropzone/types'

import { useUserContext } from 'context/user-context'
import { useFetchItem, FETCH_ITEMS } from 'resolvers/queries'
import { useUpdateItem } from 'resolvers/mutations'
import { formatCurrency } from 'lib/formatters'

import { Loader, Inputs, ErrorMessage, Button } from 'components/core'
import Dropzone from 'components/dropzone'
import * as Styles from 'components/styles/sell'

const Edit = () => {
  const router = useRouter()
  const { id } = router.query

  const { user } = useUserContext()

  if (!user) {
    return (
      <Error
        statusCode={401}
        title="You need to be logged in to see this page"
      />
    )
  }

  const [uploads, setUploads] = useState<Upload[]>(null)

  const { data, loading: fetchLoading } = useFetchItem({
    variables: { id: String(id) },
  })
  const item = data?.fetchItem

  if (fetchLoading) return <Loader size="large" />

  if (!fetchLoading && !item) {
    return <Error statusCode={401} title="That item does not exist" />
  }
  if (user?.id !== item?.user?.id) {
    return <Error statusCode={401} title="That item does not belong to you" />
  }

  const [updateItem, { loading: updateLoading, error }] = useUpdateItem()

  const validationSchema = yup.object<UpdateItemVariables>({
    id: yup.string(),
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

  const handleFormSubmit = async (values: UpdateItemVariables) => {
    const href = '/item/[id]'
    const updateCache: MutationUpdaterFn<UpdateItem> = (cache, { data }) => {
      const { fetchItems } = cache.readQuery<FetchItems>({
        query: FETCH_ITEMS,
      })

      const updatedItem = data?.updateItem
      const updatedList = fetchItems?.map(item =>
        item?.id === updatedItem?.id ? updatedItem : item
      )

      return cache.writeQuery<FetchItems>({
        query: FETCH_ITEMS,
        data: {
          fetchItems: updatedList,
        },
      })
    }

    if (uploads) {
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

      const { data } = await updateItem({
        variables: { ...values, images: uploadData, id: item?.id },
        update: (cache, result) => updateCache(cache, result),
      })
      const id = data?.updateItem?.id

      return router.push(href, href.replace('[id]', `${id}`))
    }

    const { data } = await updateItem({
      variables: { ...values, id: item?.id },
      update: (cache, result) => updateCache(cache, result),
    })
    const id = data?.updateItem?.id

    return router.push(href, href.replace('[id]', `${id}`))
  }

  const {
    handleSubmit,
    handleBlur,
    handleChange,
    values,
    touched,
    errors,
    isSubmitting,
    setSubmitting,
    dirty,
  } = useFormik<UpdateItemVariables>({
    initialValues: {
      id: item?.id,
      name: item?.name,
      description: item?.description,
      price: item?.price,
      images: item?.images,
    },
    validationSchema,
    onSubmit: async values => {
      setSubmitting(true)
      return await handleFormSubmit(values)
    },
  })

  return (
    <Styles.Container>
      <Styles.Header>Edit {item?.name}</Styles.Header>
      <Styles.Form onSubmit={handleSubmit}>
        <Styles.FieldGroup>
          <Styles.FieldHeader>Basic Information</Styles.FieldHeader>

          <Inputs.TextInput
            onBlur={handleBlur}
            onChange={handleChange}
            name="name"
            type="text"
            value={values.name}
            highlight="blue"
            label="Name"
            placeholder={item?.name}
          >
            {touched.name && errors.name && (
              <Styles.Warning>{errors.name}</Styles.Warning>
            )}
          </Inputs.TextInput>

          <Inputs.TextArea
            onBlur={handleBlur}
            onChange={handleChange}
            name="description"
            type="text"
            value={values.description}
            highlight="blue"
            label="Description"
            placeholder={item?.description}
          >
            {touched.description && errors.description && (
              <Styles.Warning>{errors.description}</Styles.Warning>
            )}
          </Inputs.TextArea>

          <Inputs.TextInput
            onBlur={handleBlur}
            onChange={handleChange}
            name="price"
            type="number"
            value={values.price}
            highlight="blue"
            label="Description"
            placeholder={formatCurrency(item?.price)}
          >
            {touched.price && errors.price && (
              <Styles.Warning>{errors.price}</Styles.Warning>
            )}
          </Inputs.TextInput>

          {error && <ErrorMessage error={error} />}
          <Styles.ButtonGroup>
            <Button
              onClick={handleSubmit}
              disabled={isSubmitting || updateLoading || !errors || !dirty}
              color="blue"
              type="submit"
            >
              {isSubmitting ? 'Updating' : 'Update'}
            </Button>
            <Button
              onClick={() => router.push('/item/[id]', `/item/${item?.id}`)}
              disabled={isSubmitting || updateLoading}
              color="blue"
              type="button"
            >
              Cancel
            </Button>
          </Styles.ButtonGroup>
        </Styles.FieldGroup>

        <Styles.FieldGroup>
          <Styles.FieldHeader>
            What does your item look like?
          </Styles.FieldHeader>

          <Dropzone setUploads={setUploads} currentImages={item?.images} />
        </Styles.FieldGroup>
      </Styles.Form>
    </Styles.Container>
  )
}

export default Edit
