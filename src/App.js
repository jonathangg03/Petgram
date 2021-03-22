import React from 'react'
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
export const App = ({ isAuth = false }) => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Router>
        <Home path='/' />
        <Home path='/pet/:id' />
        <NotFound default />
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
        <Details path='/detail/:id' />
      </Router>
      <Menu />
    </>
  )
}
