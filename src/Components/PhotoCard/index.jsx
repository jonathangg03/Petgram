import React from 'react'
import { PhotoCardContainer, Link, PhotoCardItem, PhotoCardImage, LikesContainer, Likes } from './styles'
import { MdFavoriteBorder } from 'react-icons/md'
// Like negro: MdFavorite

export const PhotoCard = ({ src, id, likes }) => {
  return (
    <PhotoCardContainer>
      <Link to={`/detail/${id}`}>
        <PhotoCardItem>
          <PhotoCardImage src={src} alt={`Photo: ${id}`} />
        </PhotoCardItem>
      </Link>
      <LikesContainer>
        <MdFavoriteBorder />
        <Likes>{likes} Me gusta</Likes>
      </LikesContainer>
    </PhotoCardContainer>
  )
}
