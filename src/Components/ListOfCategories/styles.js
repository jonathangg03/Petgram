import Styled, { css } from 'styled-components'

export const CategoriesContainer = Styled.div`
  display: -webkit-box;
  overflow-x: scroll;
  width: 100%;
  padding: 12px 0;
  height: 130px;
  ${
    props => !props.isOn && css`
      position: fixed;
      top: 10px;
      background-color: #0000004d;
      height: 17%;
      width: 70%;
      left: 15%;
      border-radius: 60px;
      padding: 3px 5px;
      p {
        font-size: 70%;
      }
    `
  }
`
