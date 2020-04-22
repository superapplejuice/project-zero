import React from 'react'
import { createPortal } from 'react-dom'

import { Props } from './types'

import * as Styles from './styles'

const Modal = ({ header, content, actions, clickOutside }: Props) => {
  const modalSelector = document.querySelector('#modal')

  const renderChildren = () => (
    <Styles.Container onClick={clickOutside}>
      <Styles.ModalContainer onClick={event => event.stopPropagation()}>
        <Styles.Header>{header}</Styles.Header>
        <Styles.Content className="content">{content}</Styles.Content>
        {actions}
      </Styles.ModalContainer>
    </Styles.Container>
  )

  return createPortal(renderChildren(), modalSelector)
}

export default Modal
