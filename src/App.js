import React, { useContext, lazy, Suspense } from 'react'
import { Redirect, Router } from '@reach/router'
import { GlobalStyles } from './GlobalStyles'
import { Context } from './Context'
const Home = lazy(() => import('./pages/Home'))
const Favorites = lazy(() => import('./pages/Favorites'))
const Enter = lazy(() => import('./pages/Enter'))
const NotFound = lazy(() => import('./pages/NotFound'))
const Details = lazy(() => import('./pages/Details'))
const User = lazy(() => import('./pages/User'))
export const App = () => {
  const { isAuth } = useContext(Context)
  return (
    <Suspense fallback={<p>Cargando</p>}>
      <GlobalStyles />
      <Router>
        <Home path='/' />
        <Home path='/pet/:id' />
        <NotFound default />
        <Details path='/detail/:id' />
        {!isAuth && <Enter path='/login' />}
        {!isAuth && <Redirect noThrow from='/favs' to='/login' />}
        {!isAuth && <Redirect noThrow from='/user' to='/login' />}
        {isAuth && <Redirect from='/login' to='/' />}
        <User path='/user' />
        <Favorites path='/favs' />
      </Router>
    </Suspense>
  )
}
