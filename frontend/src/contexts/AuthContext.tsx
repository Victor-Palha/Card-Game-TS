import { createContext, ReactNode, useState } from "react";
import {destroyCookie} from 'nookies'
import Router from 'next/router'


type AuthContextData = {
    user: UserProps;
    isAuthenticated: boolean,
    signIn: (credentials: SignInProps) => Promise<void>
    signOut: () => void
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

type AuthProviderProps = {
    children: ReactNode
}
export const AuthContext = createContext({} as AuthContextData)

//deslogar usuario
export function signOut(){
    try {
        destroyCookie(undefined, '@game.token')
        Router.push('/')
    } catch (err) {
        console.log('Error to signOut')
    }
}


export function AuthProvider({children}: AuthProviderProps){

    const [user, setUser] = useState<UserProps>()
    const isAuthenticated = !!user

    async function signIn({email, password}:SignInProps){
        console.log(`Dados de login: ${email} / ${password}`)
    }
    return(
        <AuthContext.Provider value={{user, isAuthenticated, signIn, signOut}}>
            {children}
        </AuthContext.Provider>
    )
}