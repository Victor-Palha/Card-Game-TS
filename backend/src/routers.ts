import { Router, Request, Response, request } from "express";
import { CreateUserController } from "./controllers/user/createUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
//create router
const router = Router()
//routes
router.post('/users', new CreateUserController().handle)
.post("/login", new AuthUserController().handle)

export {router}