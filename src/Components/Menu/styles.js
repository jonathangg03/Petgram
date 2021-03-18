import Styled from 'styled-components'
import { Link as LinkElement } from '@reach/router'
export const MenuContainer = Styled.div`
  height: 50px;
  width: 100%;
  background-image: linear-gradient(to right, #ffff4d 0%, #ffa277);
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  bottom: 0;
`
export const Link = Styled(LinkElement)`
  svg {
    font-size: 3rem;
    color: #fefefe
  }
`
