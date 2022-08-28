import Head from "next/head"
import Link from "next/link"
import { toast } from "react-toastify"
import { useState, useEffect } from "react"
import styles from './style.module.scss'

//Components
import { Header } from "../../components/Header"

//Contexts
import { canSSRAuth } from "../../utils/canSSRAuth"
import { AuthContext } from '../../contexts/AuthContext'
import { api } from "../../services/errors/apiClient"

export default function Decks(){
    const [decks, setDecks] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        async function loadDecks(){
            const response = await api.get('/decks')
            setDecks(response.data)
            setLoading(false)
        }
        loadDecks()
    },[])
    if(loading){
        <div>
            <h1>Carregando Decks...</h1>
        </div>
    }

    return(
        <>
        <Head>
            <title>Decks - The Game</title>
        </Head>
        <div>
            <Header/>
        </div>
        <section className={styles.decks}>
        <div className='conteiner'>
                <div className='lista-decks'>
                    {decks.map((deck)=>{
                        return(
                            <article key={deck.id}>
                                <h1><Link href={`/deck/${deck.id}`}>{deck.name}</Link></h1>
                            </article>
                        )
                    })}
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