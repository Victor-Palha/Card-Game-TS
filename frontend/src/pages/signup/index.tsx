import { useState, FormEvent, useContext } from 'react'
import Head from 'next/head'
import Link from 'next/link'
// CSS
import styles from '../../../styles/Home.module.scss'
//Components
import {Input} from '../../components/ui/Input'
import {Button} from '../../components/ui/Button'
//Contexts
import { AuthContext } from '../../contexts/AuthContext'
export default function SignUp() {

  //States
  const {signUp} = useContext(AuthContext)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSignUp(event: FormEvent){
    event.preventDefault()
    if(name === '' || email === '' || password === ''){
      alert("ERRO! Preencha os campos!")
      return
    }

    setLoading(true)

    let data = {
      name,
      email,
      password
    }
    await signUp(data)

    setLoading(false)
  }
  return (
    <>
    <Head>
      <title>
        The Game - Cadastro!
      </title>
    </Head>
    <div className={styles.conteiner}>
      <h1>Cadastro - The Game</h1>
      <div className={styles.login}>
        <form onSubmit={handleSignUp}>
            <Input type='text' placeholder='Digite seu nome de usuário' value={name} onChange={(e)=>setName(e.target.value)}/>
            <Input type='email' placeholder='Digite seu email' value={email} onChange={(e)=> setEmail(e.target.value)}/>
            <Input type='password'placeholder='Digite sua senha' value={password} onChange={(e)=> setPassword(e.target.value)}/>
            <Button children='Enviar' type='submit' loading={loading}/>
        </form>
      </div>
      <Link href='/'>  
        <a className={styles.signUp}>Já possui uma conta? Faça login!</a>
      </Link>
    </div>
    </>
  )
}
