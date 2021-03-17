import React from 'react'
import { MdHome, MdFavorite, MdPerson } from 'react-icons/md'
import { MenuContainer, Link } from './styles'

export const Menu = () => {
  return (
    <MenuContainer>
      <Link href='#'><MdHome /></Link>
      <Link href='#'><MdFavorite /></Link>
      <Link href='#'><MdPerson /></Link>
    </MenuContainer>
  )
}
