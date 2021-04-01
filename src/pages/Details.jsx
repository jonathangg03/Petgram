import React from 'react'
import { SinglePhotoCard } from '../containers/SinglePhotoCard'
import { Layout } from '../Components/Layout'

export const Details = ({ id }) => {
  return (
    <Layout title='Detalles' description={`Detalles de la foto ${id}`}>
      <SinglePhotoCard id={id} />
    </Layout>
  )
}
