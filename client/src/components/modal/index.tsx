import React from 'react'
import { createPortal } from 'react-dom'

import { Props } from './types'

import { Button } from '../core'
import * as Styles from './styles'

const Modal = ({
  header,
  content,
  buttonMain,
  mainClick,
  buttonSecondary,
  secondaryClick,
  clickOutside,
}: Props) => {
  const modalSelector = document.querySelector('#modal')

  const renderChildren = () => (
    <Styles.Container onClick={clickOutside}>
      <Styles.ModalContainer onClick={event => event.stopPropagation()}>
        <Styles.Header>{header}</Styles.Header>
        <Styles.Content className="content">{content}</Styles.Content>
        <Styles.ButtonsContainer className="buttons-container">
          <Button onClick={mainClick} type="button">
            {buttonMain}
          </Button>
          <Button onClick={secondaryClick} type="button">
            {buttonSecondary}
          </Button>
        </Styles.ButtonsContainer>
      </Styles.ModalContainer>
    </Styles.Container>
  )

  return createPortal(renderChildren(), modalSelector)
}

export default Modal
