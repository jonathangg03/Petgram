import React, { useContext } from 'react'
import { Form } from '../Components/Form'
import { SignupMutation } from '../containers/SignupMutation'
import { LoginMutation } from '../containers/LoginMutation'
import { useFormValues } from '../hooks/useFormValues'
import { Context } from '../Context'
import { Layout } from '../Components/Layout'

export const Enter = () => {
  const { activateAuth } = useContext(Context)
  const [formSignupValues, setFormSignupValues] = useFormValues()
  const [formLoginValues, setFormLoginValues] = useFormValues()
  const handleChange = (event, state, set) => {
    set({
      ...state,
      [event.target.name]: event.target.value
    })
  }
  return (
    <Layout title='Ingresar' description='Ingresar a la página para registrarse o loguearse'>
      <SignupMutation>
        {
          (signup, { data, loading, error }) => {
            const handleSubmit = (event) => {
              event.preventDefault()
              signup({
                variables: {
                  input: {
                    email: formSignupValues.email,
                    password: formSignupValues.password
                  }
                }
              }).then(res => {
                activateAuth(res.data.signup)
              })
            }
            return (
              <Form actionForm='Registrarse' onSubmit={handleSubmit} values={formSignupValues} onChange={(event) => handleChange(event, formSignupValues, setFormSignupValues)}>
                {error && (
                  'Error: El usuario con ese correo ya existe'
                )}
              </Form>
            )
          }
        }
      </SignupMutation>
      <LoginMutation>
        {
          (login, { data, loading, error }) => {
            const handleSubmit = (event) => {
              event.preventDefault()
              login({
                variables: {
                  input: {
                    email: formLoginValues.email,
                    password: formLoginValues.password
                  }
                }
              })
                .then(res => {
                  activateAuth(res.data.login)
                })
            }
            return (
              <Form actionForm='Iniciar sesión' onSubmit={handleSubmit} values={formLoginValues} onChange={(event) => handleChange(event, formLoginValues, setFormLoginValues)}>
                {error && (
                  'Error: Usuario o contraseña erroneos'
                )}
              </Form>
            )
          }
        }
      </LoginMutation>
    </Layout>
  )
}
