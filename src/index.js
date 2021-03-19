import React from 'react'
import { render } from 'react-dom'
import Client from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import { App } from './App'

const client = new Client({
  uri: 'https://petgram-server-khaki-psi.vercel.app/graphql'
})

render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('app')
)
