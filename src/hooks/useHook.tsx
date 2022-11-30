import { useState } from "react"

export const useHook = () => {
  const [valor, setValor] = useState(0)

  const acumular = (numero: number) => {
    setValor(valor + numero)
  }

  return [valor, acumular]
}
