import Head from "next/head"
import Link from "next/link"
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
            <h1>Seus Decks</h1>
            <div className={styles.conteiner}>
                <div className={styles.listaDecks}>
                    {decks.map((deck)=>{
                        return(
                            <Link href={`/deck/${deck.id_mongo}`}>
                            <article key={deck.id_mongo}>
                                <h1 key={deck.id_mongo}>{deck.name}</h1>
                            </article>
                            </Link>
                        )
                    })}
                    <Link href={`/new`}>
                        <article>
                            <AiOutlinePlusCircle/>
                            <span>Novo Deck</span>
                        </article>
                    </Link>
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