import Head from "next/head"
import Link from 'next/link'

import styles from './style.module.scss'
import { Header } from "../../components/Header"
import { canSSRAuth } from "../../utils/canSSRAuth"
import { useContext, useEffect, useState } from 'react'
import {AiOutlineBell, AiOutlineTeam} from "react-icons/ai"
//context
import { AuthContext } from '../../contexts/AuthContext'

export default function Home(){
    //Dados do usuário
    const {user} = useContext(AuthContext)
    const username = (!user)? "Carregando...": user.username
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
                    <img src="https://forums.comunidades.riotgames.com/t5/image/serverpage/image-id/18222iD1A82E00CE5798BB?v=v2" alt="Icon" />
                    <Link href="/user">
                        <a>{username}</a>
                    </Link>
                </div>
                <div className={styles.links}>
                    <AiOutlineTeam/>
                    <AiOutlineBell/>
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