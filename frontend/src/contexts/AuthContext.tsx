import { createContext, ReactNode, useState, useEffect } from "react";
import {destroyCookie, setCookie, parseCookies} from 'nookies'
import Router from 'next/router'
import {setupAPIClient} from '../services/api'
import { api } from "../services/errors/apiClient";
import {toast} from 'react-toastify'


type AuthContextData = {
    user: UserProps;
    isAuthenticated: boolean,
    signIn: (credentials: SignInProps) => Promise<void>
    signOut: () => void
    signUp: (credentials: SignUpProps) => Promise<void>
}

type UserProps = {
    id: string,
    username: string,
    email:string
}

type SignInProps = {
    email: string,
    password: string
}

type SignUpProps = {
    username: string
    email: string
    password: string
}

type AuthProviderProps = {
    children: ReactNode
}

export const AuthContext = createContext({} as AuthContextData)

//deslogar usuario
export function signOut(){
    try {
        destroyCookie(undefined, '@game.token')
        toast.info("Deslogado com sucesso")
        Router.push('/')
    } catch (err) {
        console.log('Error to signOut')
    }
}


export function AuthProvider({children}: AuthProviderProps){

    const [user, setUser] = useState<UserProps>()
    const isAuthenticated = !!user

    //UseEffect - manter usuário logado
    useEffect(()=>{
        //get token
        const {'@game.token': token} = parseCookies()
        if(token){
            api.get('/me').then(response=>{
                const {id, username, email} = response.data
                setUser({
                    id,
                    username,
                    email
                })
                
            })
            .catch(()=>{
                //deslogar user
                signOut()
            })
        }
    },[])

    //Logar usuário
    async function signIn({email, password}:SignInProps){
        try { 
            const response = await api.post('/login',{
                email,
                password
            })
            //Gerar cookies
            const {id, username, token} = response.data
            setCookie(undefined, '@game.token', token, {
                maxAge: 60 * 60 * 24 * 30, // Expira em 1 mes
                path: '/' //Quais rotas terão acesso a esse token
            })

            //Setar usuario
            setUser({
                id,
                username,
                email
            })
            //Enviar token para todas as rotas
            api.defaults.headers['Authorization'] = `Bearer ${token}`

            toast.success('Logado com sucesso!')
            //Redirecionar
            Router.push('/home')
            console.log(response.data)
        } catch (err) {
            toast.error("Erro ao acessar!")
        }
    }
    //cadastrar usuario
    async function signUp({username, email, password}: SignUpProps){
        try {
            const response = await api.post('/register',{
                username,
                email,
                password
            })
            toast.success("Registrado com sucesso!")
            Router.push('/')
        } catch (err) {
            toast.error("Erro ao cadastrar, tente novamente!")
        }
    }
    return(
        <AuthContext.Provider value={{user, isAuthenticated, signIn, signOut, signUp}}>
            {children}
        </AuthContext.Provider>
    )
}
