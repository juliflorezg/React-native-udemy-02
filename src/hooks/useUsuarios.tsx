import { useRef, useState, useEffect } from 'react';
import { reqResApi } from '../api/reqRes';
import { ReqResListado, Usuario } from '../interfaces/reqRes';

export const useUsuarios = (): [Usuario[], () => Promise<void>] => {
  const [usuarios, setUsuarios] = useState<Usuario[]>([])
  // const [currentPage, setCurrentPage] = useState(0)
  const pageRef = useRef(1)

  useEffect(() => {
    //llamado a la API
    getUsers()
  }, [])

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

  return [usuarios, getUsers]
}
