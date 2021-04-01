import React from 'react'
import { ListOfCategories } from '../Components/ListOfCategories'
import { PhotoCardContainer } from '../containers/PhotoCardContainer'
import { Layout } from '../Components/Layout'

export const Home = ({ id }) => {
  return (
    <Layout title='Inicio' description='Esta es la página principal del sitio web Petgram'>
      <ListOfCategories />
      <PhotoCardContainer categoryId={id} />
    </Layout>
  )
}

// PhotoCardContainer es el container, que es el que trae el HOC y el componente, este lo encapsula en el HOC
