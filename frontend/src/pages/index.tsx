import Head from 'next/head'
import styles from '../../styles/Home.module.scss'
import {Input} from '../components/ui/Input'
import {Button} from '../components/ui/Button'

export default function Home() {
  return (
    <>
    <Head>
      <title>
        Game - Login
      </title>
    </Head>
    <div className={styles.conteiner}>
      <h1>Login - The Game</h1>
      <div className={styles.login}>
        <form>
          <Input type='email' placeholder='Digite seu email'/>
          <Input type='password'placeholder='Digite sua senha'/>
          <Button children='Enviar' type='submit' loading={false}/>
        </form>
      </div>
      <a className={styles.signUp}>Não tem conta? Cadastre-se!</a>
    </div>
    </>
  )
}
