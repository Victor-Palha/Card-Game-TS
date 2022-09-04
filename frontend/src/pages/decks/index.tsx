import Head from "next/head"
import Link from "next/link"
import { toast } from "react-toastify"
import { useState, useEffect, useContext } from "react"
import {AiOutlinePlusCircle} from "react-icons/ai"
import styles from './style.module.scss'

//Components
import { Header } from "../../components/Header"

//Contexts
import { canSSRAuth } from "../../utils/canSSRAuth"
import { AuthContext } from '../../contexts/AuthContext'
import { api } from "../../services/errors/apiClient"

export default function Decks(){
    const {user} = useContext(AuthContext)
    const [decks, setDecks] = useState([])
    const id = (!user)? "Carregando...": user.id
    useEffect(()=>{
        async function loadDecks(id:string){
            const response = await api.get(`/deck/${id}`)
            setDecks(response.data)
        }
            loadDecks(id)    
    },[id])

    return(
        <>
        <Head>
            <title>Decks - The Game</title>
        </Head>
        <div>
            <Header/>
        </div>
        <section className={styles.decks}>
            <div className={styles.conteiner}>
                <div className={styles.listaDecks}>
                    <h1>Seus Decks</h1>
                    {decks.map((deck)=>{
                        return(
                            <article key={deck.id_mongo}>
                                <h1 key={deck.id_mongo}><Link href={`/deck/${deck.id_mongo}`}>{deck.name}</Link></h1>
                            </article>
                        )
                    })}
                    <article>
                    <AiOutlinePlusCircle/>
                    </article>
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