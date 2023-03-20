import React from 'react'
import UserHeaderNav from './UserHeaderNav'
import styles from './UserHeader.module.css'
import { useLocation } from 'react-router-dom'

const UserHeader = () => {
  const [title, setTitle] = React.useState('')
  const location = useLocation()

  React.useEffect(() => {
    switch (location.pathname) {
      case '/conta':
        setTitle('Feed')
        break
      case '/conta/estatisticas':
        setTitle('Estatísticas')
        break
      case '/conta/postar':
        setTitle('Adicionar Foto')
        break
      default:
        setTitle('Minha Conta')
    }
  }, [location])
  return (
    <header className={styles.header}>
      <h1 className="title">{title}</h1>
      <UserHeaderNav />
    </header>
  )
}

export default UserHeader