import React from 'react'
import { Helmet } from 'react-helmet'
import { Menu } from '../Menu'
import { Header } from '../Header'
export const Layout = ({ children, title, description }) => {
  return (
    <>
      <Helmet>
        <title>{`Petgram - ${title}`}</title>
        <meta name='description' content={description} />
      </Helmet>
      <Header />
      {children}
      <Menu />
    </>
  )
}
