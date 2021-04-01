import React from 'react'
import { GetFavoritesQuery } from '../containers/GetFavoritesQuery'
import { Layout } from '../Components/Layout'

export const Favorites = () => {
  return (
    <Layout title='Favoritos' description='Fotos a las que les haz dado like'>
      <GetFavoritesQuery />
    </Layout>
  )
}
