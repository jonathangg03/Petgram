import Styled from 'styled-components'
import { Link as LinkContainer } from '@reach/router'

export const CategoriesContainer = Styled.div`
  display: -webkit-box;
  overflow-x: scroll;
  width: 100%;
  padding: 12px 0;
`

export const Category = Styled.div`
  width: 75px;
  margin: 0 10px;
`

export const Link = Styled(LinkContainer)`
  color: black;
  text-decoration: none;
  font-size: 1.5rem;
  text-align: center;
`

export const Image = Styled.img`
  border-radius: 50%;
  width: 100%;
  height: 75px;
  object-fit: cover;
  box-shadow: 0px 1px 10px #000000cf;
  margin-bottom: 5px;
`
