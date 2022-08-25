import Head from "next/head"
import Link from 'next/link'

import styles from './style.module.scss'
import { Header } from "../../components/Header"
import { canSSRAuth } from "../../utils/canSSRAuth"
import { useContext, useEffect, useState } from 'react'
//context
import { AuthContext } from '../../contexts/AuthContext'
import { signOut } from "../../contexts/AuthContext"

export default function Home(){
    //Dados do usuário
    const {user} = useContext(AuthContext)

    return(
        <>
            <Head>
                <title>Home - The Game</title>
            </Head>
            <div>
                <Header/>
            </div>
            <div className={styles.userBar}>
                <div className={styles.user}>
                    <Link href="/user">
                        <a>{!user? "Carregando...": user.username}</a>
                    </Link>
                </div>
            </div>
        </>
    )
}

export const getServerSideProps = canSSRAuth(async (ctx)=>{
    return{
        props: {}
    }
})