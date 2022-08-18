import { Router, Request, Response, request } from "express";
import { CreateUserController } from "./controllers/user/createUserController";
//create router
const router = Router()
//routes
router.post('/users', new CreateUserController().handle)

export {router}