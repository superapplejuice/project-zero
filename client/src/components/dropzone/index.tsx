import React, { useCallback, useState } from 'react'
import { useDropzone, DropzoneOptions } from 'react-dropzone'

import { Upload } from './types'
import { accept, maxSize } from './constants'

import * as Styles from './styles'

const Dropzone = ({ setUploads }: { setUploads: React.Dispatch<any> }) => {
  const [images, setImages] = useState<Upload[]>([])
  const [errors, setErrors] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const onDrop = useCallback(files => {
    if (files.length < 5) {
      const uploads = files.map(file =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      )

      setImages(uploads)
      setUploads(uploads)

      setErrorMessage('')
      return setErrors(false)
    }

    setErrorMessage('4 photos max only!')
    return setErrors(true)
  }, [])

  const options: DropzoneOptions = {
    onDrop,
    maxSize, // 2MB
    multiple: true,
    preventDropOnDocument: true,
    accept,
    onDropRejected: files => {
      files.forEach(file => {
        if (file.size > maxSize) {
          return setErrorMessage('Maximum 2MB per photo!')
        } else if (!accept.includes(file.type)) {
          return setErrorMessage('Only .jpeg, .jpg, or .png files accepted!')
        }
      })

      return setErrors(true)
    },
  }

  const { getRootProps, getInputProps, isDragActive } = useDropzone(options)

  return (
    <Styles.Container>
      <Styles.UploadContainer {...getRootProps()} isActive={isDragActive}>
        <input {...getInputProps()} />
        {isDragActive
          ? 'Drag your images here!'
          : 'Click here, or drag up to 4 images here'}
      </Styles.UploadContainer>
      {images.length > 0 && (
        <Styles.Message>
          To upload a different set of images, upload them again.
        </Styles.Message>
      )}
      {errors && (
        <Styles.Message errors={errors}>{errorMessage}</Styles.Message>
      )}
      <Styles.ImagesContainer>
        {images?.map(image => (
          <img key={image.preview} src={image.preview} />
        ))}
      </Styles.ImagesContainer>
    </Styles.Container>
  )
}

export default Dropzone
