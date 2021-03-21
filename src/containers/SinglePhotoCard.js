import React from 'react'
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'
import { PhotoCard } from '../Components/PhotoCard'

const GET_SINGLE_PHOTO = gql`
  query getSinglePhoto($id:ID!) {
    photo(id:$id){
      id,
      categoryId,
      src,
      likes,
      userId,
      liked
    }
  }
`

export const SinglePhotoCard = ({ id }) => {
  return (
    <Query query={GET_SINGLE_PHOTO} variables={{ id }}>
      {
        ({ loading, error, data }) => {
          if (loading) {
            return <h1>Loading...</h1>
          }
          if (error) {
            return <h1>Error</h1>
          }
          return (
            <PhotoCard {...data.photo} />
          )
        }
      }
    </Query>
  )
}
