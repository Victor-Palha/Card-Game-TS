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
                <section className={styles.deck}>
                    <Input type="text" placeholder='Nome do seu deck'/><Button>Salvar</Button>
                    <DeckCards validation={"Ability"}/>
                    
                </section>
                <section className={styles.allCards}>
                    <div className={styles.conteiner}>
                        <Avatar/>
                        <Cards validation={"Offensive"}/>
                        <Cards validation={"Defensive"}/>
                        <Cards validation={"Ability"}/>
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
