import express, {Request, Response, NextFunction} from "express";
import config from "config";
import 'express-async-errors'
import { router } from "./routers"; //Routes
import cors from 'cors'

//create app
const app = express()

//global middlewares
app.use(express.json())
app.use(cors())
app.use(router)
app.use((err:Error, req:Request, res:Response, next:NextFunction)=>{
    if(err instanceof Error){
        //if are erro
        return res.status(400).json({error: err.message})
    }
    return res.status(500).json({status: 'error', message: 'Internal server error.'})
})

//PORT
const port = config.get<number>("port")
//create listen
app.listen(port, ()=>{
    console.log("Server online")
})
