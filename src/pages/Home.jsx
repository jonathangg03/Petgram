import React from 'react'
import { Categories } from '../Components/Categories'
import { PhotoCard } from '../Components/PhotoCard'

export const Home = () => {
  return (
    <>
      <Categories />
      <PhotoCard />
    </>
  )
}

// PhotoCardContainer es el container, que es el que trae el HOC y el componente, este lo encapsula en el HOC
