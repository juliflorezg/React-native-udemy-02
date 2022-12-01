import { useEffect, useRef, useState } from 'react'
import { reqResApi } from '../api/reqRes'
import { ReqResListado, Usuario } from '../interfaces/reqRes'

export const Usuarios = () => {
  const [usuarios, setUsuarios] = useState<Usuario[]>([])
  // const [currentPage, setCurrentPage] = useState(0)
  const pageRef = useRef(1)

  useEffect(() => {
    //llamado a la API
    getUsers()
  }, [])

  const renderUser = ({
    id,
    first_name,
    last_name,
    email,
    avatar,
  }: Usuario) => {
    return (
      <tr key={id.toString()}>
        <td>
          <img
            src={avatar}
            alt={`${first_name} avatar`}
            style={{ width: 70, borderRadius: '50%' }}
          />
        </td>
        <td>
          {first_name} {last_name}
        </td>
        <td>{email}</td>
      </tr>
    )
  }

  const getUsers = async () => {
    console.log(pageRef.current)
    // setCurrentPage(currentValue => ++currentValue)

    const response = await reqResApi.get<ReqResListado>('/users', {
      params: {
        page: pageRef.current,
      },
    })

    if (response.data.data.length > 0) {
      setUsuarios(response.data.data)
      pageRef.current++
    } else {
      alert('No hay más usuarios')
    }
  }

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
        <tbody>{usuarios.map(renderUser)}</tbody>
      </table>

      <button className="btn btn-primary" onClick={getUsers}>
        Siguientes
      </button>
    </>
  )
}
