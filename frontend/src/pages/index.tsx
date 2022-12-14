import Head from 'next/head'
import Link from 'next/link'
import { useContext, FormEvent, useState } from 'react'
import {toast} from 'react-toastify'
//CSS
import styles from '../../styles/Home.module.scss'
//Components
import {Input} from '../components/ui/Input'
import {Button} from '../components/ui/Button'
//Contexts
import { AuthContext } from '../contexts/AuthContext'
import { canSSRGuest } from '../utils/canSSRGuest'

export default function Login() {
  //States
  const {signIn} = useContext(AuthContext)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)


  //Functions
  async function handleLogin(e: FormEvent){
    e.preventDefault()
    if(email ===''|| password ===''){
      toast.warning("ERRO! Preencha os campos!")
      return
    }
    setLoading(true)

    let data = {
      email,
      password
    }
    
    await signIn(data)

    setLoading(false)
  }

  //Component
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
          <Input type='email' placeholder='Digite seu email' value={email} onChange={(e)=> setEmail(e.target.value)}/>
          <Input type='password'placeholder='Digite sua senha' value={password} onChange={(e)=> setPassword(e.target.value)}/>
          <Button children='Enviar' type='submit' loading={loading}/>
        </form>
      </div>
      <Link href='/signup'>  
        <a className={styles.signUp}>Não tem conta? Cadastre-se!</a>
      </Link>
    </div>
    </>
  )
}

export const getServerSideProps = canSSRGuest(async (ctx)=>{
  return {
    props:{}
  }
})
