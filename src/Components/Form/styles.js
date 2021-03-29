import Styled from 'styled-components'

export const FormContainer = Styled.form`
  padding-bottom: 40px;
`

export const Title = Styled.h2`
  font-size: 1.3rem;
  margin-left: 15px;
`

export const Input = Styled.input`
  width: 90%;
  display: block;
  margin: 10px auto;
  padding: 8px 4px;
  border: 1px solid #ccc;
  &::placeholder {
    color: #aaa;
  }
`

export const Button = Styled.button`
  margin: 0 auto;
  display: block;
  width: 90%;
  height: 32px;
  border: none;
  background-color: #ff9800;
  color: white;
  font-weight: bold;
  border-radius: 3px;
`

export const ErrorText = Styled.p`
  width: 285px;
  margin: 0 auto;
  color: #ff9800;
  font-weight: bold;
  padding-top: 10px;
  font-size: 1.2rem;
`
