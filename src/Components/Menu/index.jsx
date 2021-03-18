import React from 'react'
import { MdHome, MdFavorite, MdPerson } from 'react-icons/md'
import { MenuContainer, Link } from './styles'

export const Menu = () => {
  return (
    <MenuContainer>
      <Link to='/'><MdHome /></Link>
      <Link to='/favs'><MdFavorite /></Link>
      <Link to='/user'><MdPerson /></Link>
    </MenuContainer>
  )
}
