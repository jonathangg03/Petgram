import React from 'react'
import { FormContainer, Title, Input, ErrorText } from './styles'

export const Form = ({ actionForm, onSubmit, values, onChange, children }) => {
  return (
    <FormContainer onSubmit={onSubmit}>
      <Title>{actionForm}</Title>
      <Input type='email' name='email' value={values.email} required placeholder='Email...' onChange={onChange} />
      <Input type='password' name='password' value={values.password} required placeholder='Contraseña...' onChange={onChange} />
      <button>{actionForm}</button>
      <ErrorText>{children}</ErrorText>
    </FormContainer>
  )
}
