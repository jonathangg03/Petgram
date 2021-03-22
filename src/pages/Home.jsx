import React from 'react'
import { CategoriesFromQuery } from '../containers/CategoriesFromQuery'
import { PhotoCardContainer } from '../containers/PhotoCardContainer'

export const Home = ({ id }) => {
  return (
    <>
      <CategoriesFromQuery />
      <PhotoCardContainer categoryId={id} />
    </>
  )
}

// PhotoCardContainer es el container, que es el que trae el HOC y el componente, este lo encapsula en el HOC
