import React from 'react'
import { USER_POST } from '../../api'
import useFetch from '../../Hooks/useFetch'
import useForm from '../../Hooks/useForm'
import { UserContext } from '../../userContext'
import Button from '../Forms/Button'
import Input from '../Forms/Input'
import Error from '../Helper/Error'

const LoginCreate = () => {
  const username = useForm()
  const email = useForm('email')
  const password = useForm('password')

  const { userLogin } = React.useContext(UserContext)
  const { loading, error, request } = useFetch()

  const handleSubmit = async (event) => {
    event.preventDefault()
    const { url, options } = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value,
    })
    const { response } = await request(url, options)
    if (response.ok) userLogin(username.value, password.value)
    console.log(response)
  }
  return (
    <section className="animeLeft">
      <h1 className="title">Cadastre-se</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Email" type="text" name="email" {...email} />
        <Input label="Senha" type="text" name="password" {...password} />
        {loading ? (
          <Button disabled>Cadastrando...</Button>
        ) : (
          <Button>Cadastrar</Button>
        )}
        <Error error={error} />
      </form>
    </section>
  )
}

export default LoginCreate
