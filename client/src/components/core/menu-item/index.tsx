import React from 'react'
import Link from 'next/link'

import * as Styles from './styles'

type Props = {
  href?: string
  onClick?: (event: React.MouseEvent) => void
  title: string
}

const LinkItem = ({ href, title }: Props) => (
  <Styles.Container>
    <Link href={href}>
      <a>{title}</a>
    </Link>
  </Styles.Container>
)

const ButtonItem = ({ onClick, title }: Props) => (
  <Styles.Container>
    <button onClick={onClick}>{title}</button>
  </Styles.Container>
)

export default { LinkItem, ButtonItem }
