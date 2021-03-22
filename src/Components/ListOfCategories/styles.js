import Styled, { css } from 'styled-components'

export const CategoriesContainer = Styled.div`
  display: -webkit-box;
  overflow-x: scroll;
  width: 100%;
  padding: 12px 0;
  ${
    props => !props.isOn && css`
      position: fixed;
      top: 10px;
      background-color: #fff;
      height: 53px;
      width: 160px;
      left: 80px;
      border-radius: 60px;
    `
  }
`
