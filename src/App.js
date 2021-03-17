import React from 'react'
import { Router } from '@reach/router'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'
import { Header } from './Components/Header'
import { Menu } from './Components/Menu'
import { GlobalStyles } from './GlobalStyles'
export const App = () => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Router>
        <Home path='/' />
        <NotFound default />
      </Router>
      <Menu />
    </>
  )
}
