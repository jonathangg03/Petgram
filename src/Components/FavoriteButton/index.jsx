import React from 'react'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'

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
