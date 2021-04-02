import React from 'react'
import PropTypes from 'prop-types'
import { SinglePhotoCard } from '../containers/SinglePhotoCard'
import { Layout } from '../Components/Layout'

const Details = ({ id }) => {
  return (
    <Layout title='Detalles' description={`Detalles de la foto ${id}`}>
      <SinglePhotoCard id={id} />
    </Layout>
  )
}

Details.propTypes = {
  id: PropTypes.string
}

export default Details
