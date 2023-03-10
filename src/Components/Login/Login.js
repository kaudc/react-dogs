import React from 'react'
import LoginForm from './LoginForm'
import { Route, Routes, Navigate } from 'react-router-dom'
import LoginCreate from './LoginCreate'
import LoginPasswordLost from './LoginPasswordLost'
import LoginPasswordReset from './LoginPasswordReset'
import { UserContext } from '../../userContext'
import styles from './Login.module.css'

const Login = () => {
  const { login } = React.useContext(UserContext)
  if (login === true) {
    return <Navigate to="/conta"></Navigate>
  }
  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="criar" element={<LoginCreate />} />
          <Route path="perdeu" element={<LoginPasswordLost />} />
          <Route path="recuperar" element={<LoginPasswordReset />} />
        </Routes>
      </div>
    </section>
  )
}

export default Login
