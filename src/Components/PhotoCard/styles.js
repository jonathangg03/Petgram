import Styled from 'styled-components'
import { Link as LinkContainer } from '@reach/router'

export const PhotoCardContainer = Styled.div`
  max-width: 600px;
  margin: 0 auto 20px;
`

export const Link = Styled(LinkContainer)`
  width: 100%;
`

export const PhotoCardItem = Styled.div`
`

export const PhotoCardImage = Styled.img`
  width: 100%;
`

export const LikesContainer = Styled.div`
  display: flex;
  align-items: center;
  padding-left: 5px;
  svg {
    font-size: 3rem;
    margin-right: 5px;
  }
`

export const Likes = Styled.span`
  font-weight: bold;
  font-size: 1.3rem
`
