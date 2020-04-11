import React, { useCallback, useState } from 'react'
import { useDropzone, DropzoneOptions } from 'react-dropzone'

import { Upload } from './types'
import { accept, maxSize } from './constants'

import * as Styles from './styles'

const Dropzone = () => {
  const [errors, setErrors] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [images, setImages] = useState<Upload[]>([])

  const onDrop = useCallback(files => {
    if (files.length < 5) {
      setImages(
        files.map(file =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      )

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
          : 'Click here, or drag and drop up to 4 images to upload'}
      </Styles.UploadContainer>
      {images.length > 0 && (
        <Styles.Message>
          To upload different images, upload them again.
        </Styles.Message>
      )}
      {errors && (
        <Styles.Message errors={errors}>{errorMessage}</Styles.Message>
      )}
      <Styles.ImagesContainer>
        {images?.map(image => (
          <img
            key={`${image.name} ${image.lastModified}`}
            src={image.preview}
          />
        ))}
      </Styles.ImagesContainer>
    </Styles.Container>
  )
}

export default Dropzone
