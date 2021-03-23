import React from 'react'
import { Link } from '@reach/router'
import { Logo } from '../Logo'
import { HeaderContainer } from './styles'
export const Header = () => {
  return (
    <HeaderContainer>
      <Link to='/'>
        <Logo />
      </Link>
    </HeaderContainer>
  )
}
