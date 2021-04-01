import React, { useContext } from 'react'
import { Context } from '../Context'
import { Layout } from '../Components/Layout'

export const User = () => {
  const { removeAuth } = useContext(Context)
  return (
    <Layout title='Usuario' description='Página para que el usuario pueda hacer logout'>
      <button onClick={() => { removeAuth() }}>Cerrar sesión</button>
    </Layout>
  )
}
