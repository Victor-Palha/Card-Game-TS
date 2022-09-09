import styles from './style.module.scss'
import Head from "next/head"
import Link from "next/link"
import { useState, useEffect, useContext } from "react"
//Components
import { Header } from "../../components/Header"
import { Input } from '../../components/ui/Input'
//Auth
import { canSSRAuth } from "../../utils/canSSRAuth"
import { AuthContext } from '../../contexts/AuthContext'
import { api } from '../../services/errors/apiClient'

interface Cards{
    _id: string,
    name: string,
    set_name: string,
    effect: string
}
interface Avatar{
    _id: string,
    name: string,
    type: string,
    set_name: string, 
    hp: number, 
    attack: number, 
    defense: number, 
    unique_skill: string[]
    url: string
}

export default function NewDeck(){
    const {user} = useContext(AuthContext)
    const [avatar, setAvatar] = useState<Avatar[]>([])
    const [unique, setUnique] = useState([])
    const [cards, setCards] = useState([])

    const [avatarSelect, setsAvatar] = useState([])
    const [cardSelect, setsCards] = useState([])
    const [deck, setDeck] = useState([])
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

    function selectAvatar(id:string){
        setsAvatar([id])
    }
    function selectCards(id:string){
        cards.map((card)=>{
            if(card._id == id){
                setsCards([...cardSelect, card])
            }
            
        })
    }
    function selectDeck(){
        const prototypeDeck = [...avatarSelect, ...cardSelect]
        if(prototypeDeck.length < 12 || prototypeDeck.length > 22){
            alert(`${prototypeDeck.length} não é um número válido!`)
        }else{
           setDeck([...avatarSelect, ...cardSelect]) 
        }
        
    }
    function teste(){
        console.log(deck)
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
                            <article key={a._id} onClick={()=>selectAvatar(a._id)}>
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
                        {cards.map((card)=>{
                            if(card.type == "Offensive"){
                                return(
                                    <article key={card._id} onClick={()=>selectCards(card._id)}>
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
                                        <article key={card._id} onClick={()=>selectCards(card._id)}>
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
                                        <article key={card._id} onClick={()=>selectCards(card._id)}>
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
            <div className={styles.myDeck}>
                <div className={styles.nav}>
                    <h1>Nome do Deck:</h1>
                    <Input type="text" placeholder="Novo Deck"/>
                </div>
                <div className={styles.capsule}>
                    <h1>Avatar</h1>
                    <div className={styles.cards}>
                    {avatar.map((a)=>{
                        if(avatarSelect[0] == a._id){
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
                        }
                    })}
                    </div>
                </div>
                <div className={styles.capsule}>
                    <h1>Cartas Ofensivas</h1>
                    <div className={styles.cards}>
                        {cardSelect.map((card)=>{
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
            </div>
        </section>
            <button onClick={()=>selectDeck()}>selecionar deck</button>
            <button onClick={()=>teste()}>teste</button>
    </>
)
}
export const getServerSideProps = canSSRAuth(async (ctx)=>{
    return{
        props: {}
    }
})