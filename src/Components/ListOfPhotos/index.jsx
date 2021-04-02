import React from 'react'
import PropTypes from 'prop-types'
import { PhotoCard } from '../PhotoCard'

export const ListOfPhotos = ({ data, data: { photos = [] } }) => {
  // console.log(data)
  if (data.loading) {
    return <h1>Loading...</h1>
  }
  if (data.error) {
    return <h1>Error</h1>
  }
  return (
    <>
      {
          photos.map(photo => {
            return (
              <PhotoCard key={photo.id} {...photo} />
            )
          })
        }
    </>
  )
}

// Tenemos como props a data, que es un array de fotos
ListOfPhotos.propTypes = {
  data: PropTypes.object,
  photos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      categoryId: PropTypes.number,
      src: PropTypes.string,
      likes: PropTypes.number,
      userId: PropTypes.string,
      liked: PropTypes.bool
    })
  )
}
