import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { ListOfCategories } from '../Components/ListOfCategories'
import { PhotoCardContainer } from '../containers/PhotoCardContainer'
import { Layout } from '../Components/Layout'

const HomeComponent = ({ id }) => {
  return (
    <Layout title='Inicio' description='Esta es la página principal del sitio web Petgram'>
      <ListOfCategories />
      <PhotoCardContainer categoryId={id} />
    </Layout>
  )
}

HomeComponent.propTypes = {
  id: PropTypes.string
}

export default memo(HomeComponent, (prevProps, props) => {
  return prevProps.id === props.id
})
