import { useState } from "react"

export const useHook = (inicial: number = 10): [number, (number: number) => void] => {
  const [valor, setValor] = useState(inicial)

  const acumular = (numero: number) => {
    setValor(valor + numero)
  }

  return [valor, acumular]
}
