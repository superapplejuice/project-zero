import React from 'react'
import Document, { DocumentContext, DocumentInitialProps } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import { ServerPortal } from '@jesstelford/react-portal-universal/server'

class MyDocument extends Document<DocumentInitialProps> {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet()
    const portals = new ServerPortal()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props =>
            sheet.collectStyles(portals.collectPortals(<App {...props} />)),
        })

      const initialProps = await Document.getInitialProps(ctx)
      const htmlWithPortals = portals.appendUniversalPortals(initialProps.html)

      return {
        ...initialProps,
        html: htmlWithPortals,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }
}

export default MyDocument
