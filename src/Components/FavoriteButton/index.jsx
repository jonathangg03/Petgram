import React from 'react'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import PropTypes from 'prop-types'

export const FavoriteButton = ({ liked, onClick }) => {
  return (
    <>
      {
        liked
          ? <MdFavorite onClick={onClick} />
          : <MdFavoriteBorder onClick={onClick} />
      }
    </>
  )
}

FavoriteButton.propTypes = {
  liked: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
}
