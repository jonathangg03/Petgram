import React from 'react'
import { PhotoCardContainer, PhotoCardItem, PhotoCardImage, LikesContainer, Likes } from './styles'
import { MdFavoriteBorder } from 'react-icons/md'
// Like negro: MdFavorite

export const PhotoCard = ({ src = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60', likes = 0 }) => {
  return (
    <PhotoCardContainer>
      {
        [1, 2, 3, 4, 5].map(element => {
          return (
            <PhotoCardItem key={element}>
              <PhotoCardImage src={src} alt={`Photo: ${element}`} />
              <LikesContainer>
                <MdFavoriteBorder />
                <Likes>{likes} Me gusta</Likes>
              </LikesContainer>
            </PhotoCardItem>
          )
        })
      }
    </PhotoCardContainer>
  )
}
