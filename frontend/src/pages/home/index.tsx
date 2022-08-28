import Head from "next/head"
import Link from 'next/link'
import { useContext, useEffect, useState } from 'react'
import {AiOutlineBell, AiOutlineTeam} from "react-icons/ai"
import { toast } from "react-toastify"

//components
import styles from './style.module.scss'
import { Header } from "../../components/Header"
import User from "../../components/User"
import Modal from "../../components/Modal"
import { Input } from "../../components/ui/Input"

//context
import { AuthContext } from '../../contexts/AuthContext'
import { canSSRAuth } from "../../utils/canSSRAuth"

export default function Home(){
    //Dados do usuário
    const {user} = useContext(AuthContext)
    const username = (!user)? "Carregando...": user.username
    const id = (!user)? "Carregando...": user.id
    const email = (!user)? "Carregando...": user.email

    //Modal
    const hideOrShowModal = (display:boolean) =>{
        const modal = document.getElementById('modal')
        if(display){
          modal!.classList.remove("hide")
        }else{
          modal!.classList.add("hide")
        }
    }
    const handleUser = ():void =>{
        hideOrShowModal(true)
      }
    //Friends
    const handleFriends = ()=>{
        toast.error("Funcionalidade em construção!")
    }

    return(
        <>  
            <Modal children={<User username={username} id={id} email={email}/>} text="Usuário"/>
            <Head>
                <title>Home - The Game</title>
            </Head>
            <div>
                <Header/>
            </div>
            <div className={styles.userBar}>
                <div className={styles.user} onClick={handleUser}>
                    <img src="https://forums.comunidades.riotgames.com/t5/image/serverpage/image-id/18222iD1A82E00CE5798BB?v=v2" alt="Icon" />
                    <a>{username}</a>
                </div>
                <div className={styles.links}>
                    <AiOutlineTeam onClick={handleFriends}/>
                    <AiOutlineBell onClick={handleFriends}/>
                </div>
            </div>
            
            <section className={styles.main}>
                <ul>
                    <Link href="/rooms">
                        <a>Criar salas</a>
                    </Link>
                    <Link href="/decks">
                        <a>Decks</a>
                    </Link>
                </ul>
            </section>
        </>
    )
}

export const getServerSideProps = canSSRAuth(async (ctx)=>{
    return{
        props: {}
    }
})