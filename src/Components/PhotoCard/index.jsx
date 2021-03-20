import React from 'react'
import { PhotoCardContainer, PhotoCardItem, PhotoCardImage, LikesContainer, Likes } from './styles'
import { MdFavoriteBorder } from 'react-icons/md'
// Like negro: MdFavorite

export const PhotoCard = ({ data }) => {
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
  )
}
