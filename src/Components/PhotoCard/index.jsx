import React from 'react'
import { PhotoCardContainer, PhotoCardItem, PhotoCardImage, LikesContainer, Likes } from './styles'
import { MdFavoriteBorder } from 'react-icons/md'
// Like negro: MdFavorite
import { graphql } from 'react-apollo'
import { gql } from 'apollo-boost'

const withPhotos = graphql(gql`
  query getPhotos {
    photos {
      id,
      categoryId,
      src,
      likes,
      userId,
      liked
    }
  }
`)

const PhotoCardComponent = ({ data }) => {
  console.log(data)
  if (data.loading) {
    return <h1>Loading...</h1>
  }
  if (data.error) {
    return <h1>Error</h1>
  }
  return (
    <PhotoCardContainer>
      {
        data.photos.map(photo => {
          return (
            <PhotoCardItem key={photo.id}>
              <PhotoCardImage src={photo.src} alt={`Photo: ${photo.id}`} />
              <LikesContainer>
                <MdFavoriteBorder />
                <Likes>{photo.likes} Me gusta</Likes>
              </LikesContainer>
            </PhotoCardItem>
          )
        })
      }
    </PhotoCardContainer>
    // <h1>Hola</h1>
  )
}

export const PhotoCard = withPhotos(PhotoCardComponent)
