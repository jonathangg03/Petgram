import React from 'react'
import { PhotoCard } from '../PhotoCard'

export const ListOfPhotos = ({ data }) => {
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
          data.photos.map(photo => {
            return (
              <PhotoCard key={photo.id} {...photo} />
            )
          })
        }
    </>
  )
}
