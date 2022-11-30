export const TiposBasicos = () => {
  const nombre: string = 'julian'
  const edad = 25
  // nombre = 123

  const estaActivo: boolean = true
  const poderes: string[] = ['HTML', 'CSS', 'JS', 'React', "vtex"]

  //! poderes.push(1)
  //! poderes.push(boolean)
  

  return (
    <>
      <h3>Tipos Básicos</h3>
      {nombre}, {edad}, {estaActivo ? 'activo' : 'inactivo'}
      <br/>
      {poderes.join(", ")}
    </>
  )
}
