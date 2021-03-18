import React from 'react'
import { FormContainer, Title, Input, Button } from './styles'

export const Form = ({ actionForm }) => {
  return (
    <FormContainer>
      <Title>{actionForm}</Title>
      <Input type='email' required placeholder='Email...' />
      <Input type='password' required placeholder='Contraseña...' />
      <Button>{actionForm}</Button>
    </FormContainer>
  )
}
