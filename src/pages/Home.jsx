import React from 'react'
import { ListOfCategories } from '../Components/ListOfCategories'
import { PhotoCardContainer } from '../containers/PhotoCardContainer'

export const Home = ({ id }) => {
  return (
    <>
      <ListOfCategories />
      <PhotoCardContainer categoryId={id} />
    </>
  )
}

// PhotoCardContainer es el container, que es el que trae el HOC y el componente, este lo encapsula en el HOC
