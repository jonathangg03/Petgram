import React, { useContext } from 'react'
import { Context } from '../Context'
export const User = () => {
  const { removeAuth } = useContext(Context)
  return (
    <>
      <button onClick={() => { removeAuth() }}>Cerrar sesión</button>
    </>
  )
}
