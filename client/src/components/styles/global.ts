import { css } from 'styled-components'

export const BoxShadow = css`
  box-shadow: 8px 8px 16px 0 ${p => p.theme.colors.gray},
    -8px -8px 16px 0 ${p => p.theme.colors.gray};
`
