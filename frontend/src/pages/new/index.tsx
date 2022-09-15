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
import { CardsProvider } from '../../contexts/CardsContext'
import { Avatar } from '../../components/Cards'


export default function NewDeck(){
    return(
        <CardsProvider>
            <Avatar/>
        </CardsProvider>
    )
}
export const getServerSideProps = canSSRAuth(async (ctx)=>{
    return{
        props: {}
    }
})