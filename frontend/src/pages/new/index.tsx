import styles from './style.module.scss'
import Head from "next/head"
import Link from "next/link"
import { useState, useEffect, useContext } from "react"
//Components
import { Header } from "../../components/Header"
//Auth
import { canSSRAuth } from "../../utils/canSSRAuth"

export default function NewDeck(){
return(
    <>
        <Head>
            <title>New Deck - The Game</title>
        </Head>
        <div>
            <Header/>
        </div>
        <section className={styles.deck}>
            <h1>Cartas</h1>
            <div className={styles.conteiner}>
                <div className={styles.capsule}>
                    <h1>Avatares</h1>
                    <div className={styles.cards}>
                        
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