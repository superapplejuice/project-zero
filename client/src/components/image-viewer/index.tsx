import React, { useState, useEffect } from 'react'
import { UniversalPortal } from '@jesstelford/react-portal-universal'

import { Props } from './types'

import * as Styles from './styles'

const ImageViewer = ({
  images,
  selectedImage,
  displayViewer,
  closeViewer,
}: Props) => {
  const [currentImage, setCurrentImage] = useState<string>(null)

  useEffect(() => {
    setCurrentImage(selectedImage)
  }, [selectedImage])

  const renderViewer = () => (
    <UniversalPortal selector="#modal">
      <Styles.Container onClick={closeViewer}>
        <Styles.MainViewer
          key={currentImage}
          src={currentImage}
          alt="product_image"
          onClick={event => event.stopPropagation()}
        />
        <Styles.CarouselContainer
          className="image-carousel"
          onClick={event => event.stopPropagation()}
        >
          {images.map(url => (
            <Styles.CarouselImage
              key={url}
              src={url}
              alt="product_image"
              onClick={() => setCurrentImage(url)}
            />
          ))}
        </Styles.CarouselContainer>
      </Styles.Container>
    </UniversalPortal>
  )

  return displayViewer ? renderViewer() : null
}

export default ImageViewer
