interface Persona {
  nombreCompleto: string
  edad: number
  direccion: Direccion
}

interface Direccion {
  pais: string
  casaNo: number
}

export const ObjetosLiterales = () => {
  const persona: Persona = {
    nombreCompleto: 'Julian',
    edad: 25,
    direccion: {
      pais: 'Colombia',
      casaNo: 6999,
    },
  }
  return (
    <>
      <h3>ObjetosLiterales</h3>
      {JSON.stringify(persona)}
      <code>
        <pre>{JSON.stringify(persona, null, 2)}</pre>
      </code>
    </>
  )
}
