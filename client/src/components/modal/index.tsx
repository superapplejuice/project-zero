import React, { Fragment } from 'react'
import { UniversalPortal } from '@jesstelford/react-portal-universal'

import { Props } from './types'

import * as Styles from './styles'

const Modal = ({
  header,
  content,
  actions,
  displayModal,
  clickOutside,
}: Props) => {
  const renderChildren = () => (
    <Fragment>
      <UniversalPortal selector="#modal">
        <Styles.Container onClick={clickOutside}>
          <Styles.ModalContainer onClick={event => event.stopPropagation()}>
            <Styles.Header>{header}</Styles.Header>
            <Styles.Content className="content">{content}</Styles.Content>
            {actions}
          </Styles.ModalContainer>
        </Styles.Container>
      </UniversalPortal>
    </Fragment>
  )

  return displayModal ? renderChildren() : null
}

export default Modal
