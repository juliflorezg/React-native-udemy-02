import { useState } from 'react'

export const useForm = <T extends Object>(formulario: T) => {
  const [formState, setFormState] = useState(formulario)

  const onChange = (field: keyof T, value: string) => {
    setFormState({
      ...formState,
      [field]: value,
    })
  }

  return {
    formState,
    ...formState,
    onChange,
  }
}
