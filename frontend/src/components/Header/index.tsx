import styles from './style.module.scss'
import Link from 'next/link'
import {AiOutlinePoweroff} from "react-icons/ai"
import { useContext } from 'react'
//context
import { AuthContext } from '../../contexts/AuthContext'
export function Header(){

    //logout 
    const {signOut} = useContext(AuthContext)

    return(
        <header className={styles.header}>

            <Link href='/home'>
                <h1>The <span>Game</span></h1>
            </Link> 

            <nav className={styles.links}>
                <Link href='/about'>
                 <a>Sobre nós</a>   
                </Link>
                <Link href='/rules'>
                    <a>Regras do Jogo</a> 
                </Link>
                <button onClick={signOut}>
                    <AiOutlinePoweroff/>
                </button>
            </nav>
        </header>
    )
}