import styles from './style.module.scss'
import Head from "next/head"
import Link from "next/link"
import { useState, useEffect, useContext } from "react"
//Components
import { Header } from "../../components/Header"
import { Input } from '../../components/ui/Input'
import { Button } from '../../components/ui/Button'
//Auth
import { canSSRAuth } from "../../utils/canSSRAuth"
import { AuthContext } from '../../contexts/AuthContext'
import { api } from '../../services/errors/apiClient'
import { CardsContext, CardsProvider } from '../../contexts/CardsContext'
import { Avatar, Cards, DeckCards } from '../../components/Cards'


export default function NewDeck(){
    const [avatarDeck, setAvatarDeck] = useState("")
    const [uniqueDeck, setUniqueDeck] = useState("")
    const [cardsDeck, setCardsDeck] = useState<string[]>([])

    function addAvatar(id:string){
        return id
    }
    function addCard(id:string){
        setCardsDeck([...cardsDeck, id])
    }
    function removeCard(id:string){
        const index = cardsDeck.indexOf(id);
        if (index > -1) { // only splice array when item is found
            cardsDeck.splice(index, 1); // 2nd parameter means remove one item only
        }
    }
    function seeDeck(){
        alert(cardsDeck.length)
    }

    return(
    <CardsProvider>
        <>
            <Head>
                <title>New Deck - The Game</title>
            </Head>
            <div>
                <Header/>
            </div>
            
            <div className={styles.box}>
                <button onClick={()=>seeDeck()}>see</button>
                <section className={styles.deck}>
                    <Input type="text" placeholder='Nome do seu deck'/><Button>Salvar</Button>

                    <DeckCards validation={"Offensive"} inDeck={cardsDeck} removeCard={removeCard}/>
                    <DeckCards validation={"Defensive"} inDeck={cardsDeck} removeCard={removeCard}/>
                    <DeckCards validation={"Ability"} inDeck={cardsDeck} removeCard={removeCard}/>
                    
                </section>
                <section className={styles.allCards}>
                    <div className={styles.conteiner}>
                        <Avatar/>
                        <Cards validation={"Offensive"} addCard={addCard}/>
                        <Cards validation={"Defensive"} addCard={addCard}/>
                        <Cards validation={"Ability"} addCard={addCard}/>
                    </div>
                </section> 
            </div>
        </>
        </CardsProvider>
    )
}
export const getServerSideProps = canSSRAuth(async (ctx)=>{
    return{
        props: {}
    }
})
