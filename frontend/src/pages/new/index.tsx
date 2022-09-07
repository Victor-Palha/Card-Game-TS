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

        </section>
    </>
)
}
export const getServerSideProps = canSSRAuth(async (ctx)=>{
    return{
        props: {}
    }
})