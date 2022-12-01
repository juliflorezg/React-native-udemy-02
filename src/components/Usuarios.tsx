import { useEffect, useState } from 'react';
import { reqResApi } from "../api/reqRes"
import { ReqResListado, Usuario } from "../interfaces/reqRes"

export const Usuarios = () => {
  const [usuarios, setUsuarios] = useState<Usuario[]>([])

  useEffect(() => {
    
    //llamado a la API
    reqResApi
      .get<ReqResListado>('/users')
      .then(res => {
        console.log(res.data.data[0].first_name)
      })
      .catch(console.log)


  }, [])
  

  return (
    <>
      <h3>Usuarios:</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Nombre</th>
            <th>Email</th>
          </tr>
        </thead>
      </table>
    </>
  )
}
