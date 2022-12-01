import { useEffect, useReducer } from 'react'

interface AuthState {
  validando: boolean
  token: string | null
  username: string
  nombre: string
}

type LoginPayload = {
  nombre: string
  username: string
}

type ActionType =
  | {
      type: 'login'
      payload: LoginPayload
    }
  | {
      type: 'logout'
    }

const initialState: AuthState = {
  validando: true,
  token: null,
  username: '',
  nombre: '',
}

const authReducer = (state: AuthState, action: ActionType): AuthState => {
  switch (action.type) {
    case 'login':
      const { nombre, username } = action.payload
      return {
        validando: false,
        token: 'ajksdbfouyb3454223',
        nombre,
        username,
      }
    case 'logout':
      return {
        validando: false,
        token: null,
        nombre: '',
        username: '',
      }

    default:
      return state
  }
}

export const Login = () => {
  const [{ validando, token, nombre }, dispatch] = useReducer(
    authReducer,
    initialState
  )

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: 'logout' })
    }, 2000)
  }, [])

  const login = () => {
    dispatch({
      type: 'login',
      payload: {
        nombre: 'lol',
        username: 'lol69',
      },
    })
  }

  const logout = () => {
    dispatch({ type: 'logout' })
  }

  if (validando) {
    return (
      <>
        <h3>Login</h3>
        <div className="alert alert-info">Validando</div>
      </>
    )
  }

  return (
    <>
      {token ? (
        <div className="alert alert-success">Autenticado como: {nombre}</div>
      ) : (
        <div className="alert alert-danger">No autenticado</div>
      )}

      {token ? (
        <button className="btn btn-danger" onClick={logout}>
          Logout
        </button>
      ) : (
        <button className="btn btn-primary" onClick={login}>
          Login
        </button>
      )}
    </>
  )
}
