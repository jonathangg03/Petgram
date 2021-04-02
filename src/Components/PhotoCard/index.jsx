import React from 'react'
import PropTypes from 'prop-types'
import { PhotoCardContainer, Link, PhotoCardItem, PhotoCardImage, LikesContainer, Likes } from './styles'
import { LikePhotoMutation } from '../../containers/LikePhotoMutation'
import { FavoriteButton } from '../FavoriteButton'
import { useLocalStorage } from '../../hooks/useLocalStorage'

export const PhotoCard = ({ src, id, likes, pageFavorite }) => {
  const [liked, setLiked] = useLocalStorage(`item-${id}`, false)
  const userAuthenticated = window.sessionStorage.getItem('token')
  return (
    <PhotoCardContainer>
      <Link to={`/detail/${id}`}>
        <PhotoCardItem>
          <PhotoCardImage src={src} alt={`Photo: ${id}`} />
        </PhotoCardItem>
      </Link>
      <LikesContainer>
        <LikePhotoMutation>
          {
            (toggleLike) => {
              const handleToggleLike = () => {
                userAuthenticated && toggleLike({
                  variables: {
                    input: { id }
                  }
                }).then(res => setLiked(!liked))
              }
              return (
                <>
                  {
                    !pageFavorite && (
                      <FavoriteButton onClick={handleToggleLike} liked={liked} favorite={pageFavorite} />
                    )
                  }
                </>
              )
            }
          }
        </LikePhotoMutation>
        <Likes>{likes} Me gusta</Likes>
      </LikesContainer>
    </PhotoCardContainer>
  )
}

PhotoCard.propTypes = {
  src: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  pageFavorite: PropTypes.bool
}
