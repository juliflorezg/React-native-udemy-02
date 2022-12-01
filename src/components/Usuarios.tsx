// import { useEffect, useRef, useState } from 'react'
// import { reqResApi } from '../api/reqRes'
import { Usuario } from '../interfaces/reqRes'

import { useUsuarios } from '../hooks/useUsuarios'

export const Usuarios = () => {
  const [usuarios, getPreviousPage, getNextPage] = useUsuarios()

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
      <button className="btn btn-primary" onClick={getPreviousPage}>
        Anteriores
      </button>
      &nbsp;
      <button className="btn btn-primary" onClick={getNextPage}>
        Siguientes
      </button>
    </>
  )
}
