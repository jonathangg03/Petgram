import React from 'react'
import { render } from 'react-dom'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import { App } from './App'
import Context from './Context'

const client = new ApolloClient({
  uri: 'https://petgram-server-khaki-psi.vercel.app/graphql',
  request: (operations) => {
    const token = window.sessionStorage.getItem('token')
    const authorization = token ? `Bearer ${token}` : ''
    operations.setContext({
      headers: {
        authorization: authorization
      }
    })
  },
  onError: (error) => {
    const networkError = error.networkError
    if (networkError) {
      if (networkError.result.code === 'invalid_token') {
        window.sessionStorage.removeItem('token')
        window.location.href = '/'
      }
    }
  }
})

render(
  <Context.Provider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Context.Provider>,
  document.getElementById('app')
)
