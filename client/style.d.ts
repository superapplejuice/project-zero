import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      orange: '#F99227'
      yellow: '#EBCC72'
      blue: '#2B85BE'
      gray: '#E1DFDB'
      black: '#2A2728'
    }
    styles: {
      borderRadius: '8px'
      transition: '0.4s cubic-bezier(0.2, 0.6, 0.2, 1)'
    }
  }
}
