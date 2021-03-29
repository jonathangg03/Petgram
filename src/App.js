import React, { useContext } from 'react'
import { Router } from '@reach/router'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'
import { Header } from './Components/Header'
import { Menu } from './Components/Menu'
import { Favorites } from './pages/Favorites'
import { User } from './pages/User'
import { GlobalStyles } from './GlobalStyles'
import { Enter } from './pages/Enter'
import { Details } from './pages/Details'
import { Context } from './Context'
export const App = () => {
  const { isAuth } = useContext(Context)
  return (
    <>
      <GlobalStyles />
      <Header />
      <Router>
        <Home path='/' />
        <Home path='/pet/:id' />
        <NotFound default />
        <Details path='/detail/:id' />
        {
          isAuth
            ? <>
              <Favorites path='/favs' />
              <User path='/user' />
            </>
            : <>
              <Enter path='/favs' />
              <Enter path='/user' />
            </>
        }
      </Router>
      <Menu />
    </>
  )
}
