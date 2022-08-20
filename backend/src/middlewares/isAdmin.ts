import { Response, Request, NextFunction } from "express";
import {verify} from "jsonwebtoken"

interface PayLoad{
    //id from JWT
    sub:string
}

export function isAdmin(req:Request, res:Response, next:NextFunction){
    //Receive JWT
    const tokenAuth = req.headers.authorization
    //Validation if are token []
    if(!tokenAuth){
        return res.status(401).end()
    }

    //GET TOKEN
    const [,token] = tokenAuth.split(" ")

    //Validate token
    try {

        //Verify with jsonwebtoken using TS interface
        const { sub } = verify(
            token,
            process.env.JWT_SECRET
        ) as PayLoad
        //verify if are Admin
        if(sub != process.env.ID_ADMIN){
            throw new Error("You are not allow to do it!")
        }
        //put id on request
        
        req.user_id = sub
        
        //if is okay
        return next()

    } catch (error) {
        return res.status(401).end()
    }
}