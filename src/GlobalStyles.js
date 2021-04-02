import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    font-family: Arial, sans-serif;
  }

  body {
    padding-bottom: 50px
  }

  button {
    display: block;
    width: 100%;
    height: 32px;
    border: none;
    background-color: #ff9800;
    color: white;
    font-weight: bold;
    border-radius: 3px;
  }
`
