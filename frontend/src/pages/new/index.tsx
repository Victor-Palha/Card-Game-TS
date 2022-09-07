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

    const [select, setSelect] = useState<string[]>([])
    const id = (!user)? "Carregando...": user.id
    useEffect(()=>{
        async function getCards(){
            const responseA = await api.get("/avatar")
            const responseC = await api.get("/cards")
            //console.log(response.data)
            setAvatar(responseA.data)
            setCards(responseC.data)
        }
        getCards()
    },[id])
    function selectCard(id:string){
        setSelect([...select, id])
    }
    function teste(){
        console.log(select)
    }
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
                            <article key={a._id} onClick={()=>selectCard(a._id)}>
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
                    <button onClick={()=>teste()}>teste</button>
                    <h1>Cartas Ofensivas</h1>
                    <div className={styles.cards}>
                        {cards.map((card)=>{
                            if(card.type == "Offensive"){
                                return(
                                    <article key={card._id}>
                                        <h1 key={card._id}>{card.name}</h1>
                                        <p>Tipo: {card.type}</p>
                                        <p>Set: {card.set_name}</p>
                                        <div className={styles.effect}>
                                            <span>{card.effect}</span>
                                        </div>
                                    </article>
                                )
                            }
                        })}
                    </div>
                </div>
                <div className={styles.capsule}>
                    <h1>Cartas Defensivas</h1>
                    <div className={styles.cards}>
                        {cards.map((card)=>{
                                if(card.type == "Deffensive"){
                                    return(
                                        <article key={card._id}>
                                            <h1 key={card._id}>{card.name}</h1>
                                            <p>Tipo: {card.type}</p>
                                            <p>Set: {card.set_name}</p>
                                            <div className={styles.effect}>
                                                <span>{card.effect}</span>
                                            </div>
                                        </article>
                                    )
                                }
                            })}
                    </div>
                </div>
                <div className={styles.capsule}>
                    <h1>Cartas de Habilidade</h1>
                    <div className={styles.cards}>
                        {cards.map((card)=>{
                                if(card.type == "Ability"){
                                    return(
                                        <article key={card._id}>
                                            <h1 key={card._id}>{card.name}</h1>
                                            <p>Tipo: {card.type}</p>
                                            <p>Set: {card.set_name}</p>
                                            <div className={styles.effect}>
                                                <span>{card.effect}</span>
                                            </div>
                                        </article>
                                    )
                                }
                            })}
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