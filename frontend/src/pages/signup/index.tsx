import Head from 'next/head'
import Link from 'next/link'
// CSS
import styles from '../../../styles/Home.module.scss'
//Components
import {Input} from '../../components/ui/Input'
import {Button} from '../../components/ui/Button'

export default function SignUp() {
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
        <form>
            <Input type='text' placeholder='Digite seu nome de usuário'/>
            <Input type='email' placeholder='Digite seu email'/>
            <Input type='password'placeholder='Digite sua senha'/>
            <Button children='Enviar' type='submit' loading={false}/>
        </form>
      </div>
      <Link href='/'>  
        <a className={styles.signUp}>Já possui uma conta? Faça login!</a>
      </Link>
    </div>
    </>
  )
}
