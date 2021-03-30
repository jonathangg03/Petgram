import React from 'react'
import { Mutation } from 'react-apollo'
import { gql } from 'apollo-boost'

const LIKE_PHOTO = gql`
  mutation likePhoto($input:LikePhoto!){
    likePhoto(input:$input){
      id,
      liked,
      likes
    }
  }
`
export const LikePhotoMutation = ({ children }) => {
  return (
    <Mutation mutation={LIKE_PHOTO}>
      {children}
    </Mutation>
  )
}
