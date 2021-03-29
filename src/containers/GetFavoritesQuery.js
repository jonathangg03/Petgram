import React from 'react'
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'

const GET_FAVORITES = gql`
  query getFavs {
    favs {
      id
      categoryId
      src
      likes
      userId
    }
  }
`

export const GetFavoritesQuery = () => {
  return (
    <Query query={GET_FAVORITES} fetchPolicy='network-only'>
      {
      ({ loading, error, data }) => {
        if (loading) {
          return <p>Loading...</p>
        }
        if (error) {
          return <p>Error: {error.message}</p>
        }
        console.log(data)
        return <h1>Hola</h1>
      }
    }
    </Query>
  )
}
