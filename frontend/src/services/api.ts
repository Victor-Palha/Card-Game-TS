//configuration of API
import axios, {AxiosError} from "axios";
import {parseCookies} from "nookies"
//Local import
import { AuthTokenError } from "./errors/AuthTokenError";
import { signOut } from "../contexts/AuthContext";

export function setupAPIClient(ctx = undefined){
    let cookies = parseCookies(ctx)

    const api = axios.create({
        baseURL: "http://localhost:3000/api",
        headers: {
            Authorization: `Bearer ${cookies['@game.token']}`
        }
    })

    api.interceptors.response.use(response =>{
        return response
    }, (err: AxiosError)=>{
        if(err.response.status === 401){
            if(typeof window !== undefined){
               // log out user if are error
               signOut()
            }else{
                return Promise.reject(new AuthTokenError())
            }
        }
        return Promise.reject(err)
    })
    //If are all okay, call api
    return api
}