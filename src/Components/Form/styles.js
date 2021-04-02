import Styled from 'styled-components'

export const FormContainer = Styled.form`
  padding: 0 15px 40px;
  max-width: 500px;
  margin: 0 auto;
`

export const Title = Styled.h2`
  font-size: 1.3rem;
`

export const Input = Styled.input`
  width: 100%;
  display: block;
  margin: 10px 0;
  padding: 8px 4px;
  border: 1px solid #ccc;
  &::placeholder {
    color: #aaa;
  }
`

export const ErrorText = Styled.p`
  width: 285px;
  margin: 0 auto;
  color: #ff9800;
  font-weight: bold;
  padding-top: 10px;
  font-size: 1.2rem;
`
