import Head from "next/head"
import Link from "next/link"
import { toast } from "react-toastify"
import styles from './style.module.scss'

//Components
import { Header } from "../../components/Header"

//Contexts
import { canSSRAuth } from "../../utils/canSSRAuth"
import { AuthContext } from '../../contexts/AuthContext'

export default function Decks(){
    return(
        <>
        <Head>
            <title>Decks - The Game</title>
        </Head>
        <div>
            <Header/>
        </div>
        
        </>
    )
}

export const getServerSideProps = canSSRAuth(async (ctx)=>{
    return{
        props: {}
    }
})