import styles from './style.module.scss'
import Head from "next/head"
import Link from "next/link"
import { useState, useEffect, useContext } from "react"
//Components
import { Header } from "../../components/Header"
//Auth
import { canSSRAuth } from "../../utils/canSSRAuth"
import { AuthContext } from '../../contexts/AuthContext'
import { api } from '../../services/errors/apiClient'

export default function NewDeck(){
    const {user} = useContext(AuthContext)
    const [avatar, setAvatar] = useState([])
    const [unique, setUnique] = useState([])
    const [cards, setCards] = useState([])
    const id = (!user)? "Carregando...": user.id
    useEffect(()=>{
        async function getAvatars(){
            const response = await api.get("/avatar")
            //console.log(response.data)
            setAvatar(response.data)
        }
        getAvatars()
        console.log(avatar[0])
    },[id])
return(
    <>
        <Head>
            <title>New Deck - The Game</title>
        </Head>
        <div>
            <Header/>
        </div>
        <section className={styles.deck}>
            <div className={styles.conteiner}>
                <div className={styles.capsule}>
                    <h1>Avatares</h1>
                    <div className={styles.cards}>
                    {avatar.map((a)=>{
                        return(
                            <article key={a._id}>
                                <h1 key={a._id}>{a.name}</h1>
                                <p>Tipo: {a.type}</p>
                                <div className={styles.status}>
                                    <p>Atk: {a.attack}</p>
                                    <p>Def: {a.defense}</p>
                                    <p>Hp: {a.hp}</p>
                                </div>
                            </article>
                        )
                    })}
                    </div>
                </div>
                <div className={styles.capsule}>
                    <h1>Cartas Ofensivas</h1>
                    <div className={styles.cards}>

                    </div>
                </div>
                <div className={styles.capsule}>
                    <h1>Cartas Defensivas</h1>
                    <div className={styles.cards}>

                    </div>
                </div>
                <div className={styles.capsule}>
                    <h1>Cartas de Habilidade</h1>
                    <div className={styles.cards}>

                    </div>
                </div>
            </div>
        </section>
    </>
)
}
export const getServerSideProps = canSSRAuth(async (ctx)=>{
    return{
        props: {}
    }
})