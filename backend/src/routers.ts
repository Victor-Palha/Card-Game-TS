import { Router, Request, Response, request } from "express";
import { CreateUserController } from "./controllers/user/createUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailsUserController } from "./controllers/user/DetailsUserController";
import { isAuth } from "./middlewares/isAuth";
//create router
const router = Router()
//routes
router
.post('/users', new CreateUserController().handle)
.post("/login", new AuthUserController().handle)
.get("/me", isAuth, new DetailsUserController().handle)

export {router}