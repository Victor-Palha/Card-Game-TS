import { Router, Request, Response, request } from "express";
//create router
const router = Router()
//routes
router.get("/test", (req:Request, res:Response)=>{
    return res.json({message: "Router working!"})
})

export {router}