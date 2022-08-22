import Head from 'next/head'
import Link from 'next/link'
import { useContext, FormEvent } from 'react'
//CSS
import styles from '../../styles/Home.module.scss'
//Components
import {Input} from '../components/ui/Input'
import {Button} from '../components/ui/Button'

import { AuthContext } from '../contexts/AuthContext'

export default function Home() {
  const {signIn} = useContext(AuthContext)

  async function handleLogin(e: FormEvent){
    e.preventDefault()

    let data = {
      email: "teste@teste.com",
      password: "1233412"
    }

    await signIn(data)
  }

  return (
    <>
    <Head>
      <title>
        The Game - Login
      </title>
    </Head>
    <div className={styles.conteiner}>
      <h1>Login - The Game</h1>
      <div className={styles.login}>
        <form onSubmit={handleLogin}>
          <Input type='email' placeholder='Digite seu email'/>
          <Input type='password'placeholder='Digite sua senha'/>
          <Button children='Enviar' type='submit' loading={false}/>
        </form>
      </div>
      <Link href='/signup'>  
        <a className={styles.signUp}>Não tem conta? Cadastre-se!</a>
      </Link>
    </div>
    </>
  )
}
