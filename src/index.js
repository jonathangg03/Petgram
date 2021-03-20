import React from 'react'
import { render } from 'react-dom'
// import Client from 'apollo-boost'
import { ApolloProvider, InMemoryCache, ApolloClient } from '@apollo/client'
import { App } from './App'

const client = new ApolloClient({
  uri: 'https://petgram-server-khaki-psi.vercel.app/graphql',
  cache: new InMemoryCache()
})

render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('app')
)
