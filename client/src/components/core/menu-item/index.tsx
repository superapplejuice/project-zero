import React from 'react'
import Link from 'next/link'

import * as Styles from './styles'

type Props = {
  href: string
  title: string
}

const MenuItem = ({ href, title }: Props) => (
  <Styles.Container>
    <Link href={href}>{title}</Link>
  </Styles.Container>
)

export default MenuItem
