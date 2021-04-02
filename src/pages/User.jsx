import React, { useContext } from 'react'
import { Context } from '../Context'
import { Layout } from '../Components/Layout'

const User = () => {
  const { removeAuth } = useContext(Context)
  const handleLogout = () => {
    removeAuth()
    window.localStorage.clear()
  }
  return (
    <Layout title='Usuario' description='Página para que el usuario pueda hacer logout'>
      <button onClick={handleLogout}>Cerrar sesión</button>
    </Layout>
  )
}

export default User
