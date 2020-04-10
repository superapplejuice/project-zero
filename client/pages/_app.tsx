import React from 'react'
import App, { AppContext } from 'next/app'
import { ApolloProvider } from '@apollo/react-hooks'
import { ApolloClient } from 'apollo-boost'

import withApollo from 'lib/with-apollo'

import Layout from 'components/layout'

class MyApp extends App<{ apollo: ApolloClient<{}> }> {
  static async getInitialProps({ Component, ctx }: AppContext) {
    let pageProps: {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  public render() {
    const { Component, pageProps, apollo } = this.props

    return (
      <ApolloProvider client={apollo}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    )
  }
}

export default withApollo(MyApp)
