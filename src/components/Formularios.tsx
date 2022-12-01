import { useForm } from '../hooks/useForm'

export const Formularios = () => {
  const { formState, email, password, onChange } = useForm({
    email: 'test@test.com',
    password: '21345542',
  })

  return (
    <>
      <h3>Formularios</h3>
      <input
        type="text"
        className="form-control"
        placeholder="email"
        value={email}
        onChange={({ target }) => {
          onChange('email', target.value)
        }}
      />
      <input
        type="text"
        className="form-control mt-2 mb-2"
        placeholder="Password"
        value={password}
        onChange={({ target }) => {
          onChange('password', target.value)
        }}
      />

      <code>
        <pre>{JSON.stringify(formState, null, 2)}</pre>
      </code>
    </>
  )
}
