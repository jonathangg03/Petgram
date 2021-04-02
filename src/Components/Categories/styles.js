import Styled from 'styled-components'
import { Link as LinkContainer } from '@reach/router'

export const Category = Styled.div`
  width: 22%;
  height: 68%;
  max-width: 73px;
  max-height: 71px;
  margin: 0 3%;
`

export const Link = Styled(LinkContainer)`
  color: black;
  text-decoration: none;
  font-size: 1.5rem;
  text-align: center;
  width: 100%;
  height: 100%;
`

export const Image = Styled.img`
  border-radius: 50%;
  width: 100%;
  height: 100%;
  object-fit: cover;
  box-shadow: 0px 1px 10px #000000cf;
  margin-bottom: 3%;
`

export const Title = Styled.h1`
  position: fixed;
  top: 0;
`
