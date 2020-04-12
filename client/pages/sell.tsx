import React, { useState } from 'react'

import { Upload } from 'components/dropzone/types'

import Dropzone from 'components/dropzone'

const Sell = () => {
  const [uploads, setUploads] = useState<Upload[]>(null)
  const [submitting, setSubmitting] = useState(false)

  const handleUpload = async () => {
    setSubmitting(true)
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
    // img_url at property .secure_url
    // redirect to product page
    setSubmitting(false)
    return uploadData
  }

  return (
    <div>
      <div>Sell your item!</div>
      <Dropzone setUploads={setUploads} />
      <button onClick={handleUpload} disabled={submitting || !uploads}>
        {submitting ? 'Submitting...' : 'Submit'}
      </button>
    </div>
  )
}

export default Sell
