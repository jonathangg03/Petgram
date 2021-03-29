import { useState } from 'react'

export const useFormValues = () => {
  const [formValues, setFormValues] = useState({
    email: '',
    password: ''
  })

  return [formValues, setFormValues]
}
