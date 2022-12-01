import { useRef, useState, useEffect } from 'react'
import { reqResApi } from '../api/reqRes'
import { ReqResListado, Usuario } from '../interfaces/reqRes'

export const useUsuarios = (): [Usuario[], () => void, () => void] => {
  const [usuarios, setUsuarios] = useState<Usuario[]>([])
  // const [currentPage, setCurrentPage] = useState(0)
  const [totalPages, setTotalPages] = useState(0)
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
    setTotalPages(response.data.total_pages)

    console.log(response.data)

    // if (response.data.data.length > 0) {
    setUsuarios(response.data.data)
    // pageRef.current++
    // } else {
    //   alert('No hay más usuarios')
    // }
  }

  const getPreviousPage = () => {
    pageRef.current--
    console.log(pageRef.current)
    if (pageRef.current <= 0) {
      pageRef.current = 1
      return
    } else getUsers()
  }
  const getNextPage = () => {
    pageRef.current++
    console.log(pageRef.current)
    if (pageRef.current > totalPages) {
      pageRef.current = totalPages
      console.log(pageRef.current)
      return
    } else getUsers()
  }

  return [usuarios, getPreviousPage, getNextPage]
}
