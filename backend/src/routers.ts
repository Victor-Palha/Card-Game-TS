//Imports
import { Router, Request, Response, request } from "express";
import { CreateUserController } from "./controllers/user/createUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailsUserController } from "./controllers/user/DetailsUserController";
import { isAuth } from "./middlewares/isAuth";
import { CreateAvatarController, CreateUniqueController } from "./controllers/cards/createCardController";
import { isAdmin } from "./middlewares/isAdmin";
import { ShowAvatarController, ShowUniqueController } from "./controllers/cards/showCardsController";

//create router
const router = Router()
//routes
router
.post('/register', new CreateUserController().handle)
.post("/login", new AuthUserController().handle)
.get("/me", isAuth, new DetailsUserController().handle)
//Cards post
.post("/avatar", isAdmin,new CreateAvatarController().handle)
.post("/unique", isAdmin, new CreateUniqueController().handle)
//Cards get
.get("/avatar", new ShowAvatarController().handle)
.get("/uniques", new ShowUniqueController().handle)
export {router}