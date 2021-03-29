import React, { createContext, useState } from 'react'

export const Context = createContext()

const provider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(() => {
    return window.localStorage.getItem('token')
  })
  const value = {
    isAuth,
    activateAuth: (token) => {
      try {
        setIsAuth(true)
        window.localStorage.setItem('token', token)
      } catch (error) {
        console.log(error)
      }
    },
    removeAuth: () => {
      try {
        setIsAuth(false)
        window.localStorage.removeItem('token')
      } catch (error) {
        console.log(error)
      }
    }
  }
  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  )
}

export default {
  Provider: provider,
  Consumer: Context.consumer
}
