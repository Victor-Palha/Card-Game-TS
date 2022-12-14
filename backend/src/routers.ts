//Imports
import { Router, Request, Response, request } from "express";
//Controler
import { CreateUserController } from "./controllers/user/createUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailsUserController } from "./controllers/user/DetailsUserController";
import { CreateAvatarController, CreateCardController, CreateDeckController, CreateUniqueController } from "./controllers/cards/createCardController";
import { ShowAllController, ShowAvatarController, ShowCardsContoller, ShowDeckController, ShowUniqueController } from "./controllers/cards/showCardsController";
//Middlewares
import { isAuth } from "./middlewares/isAuth";
import { isAdmin } from "./middlewares/isAdmin";


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
.post("/card", isAdmin, new CreateCardController().handle)
.post("/deck", isAuth, new CreateDeckController().handle)
//Cards get
.get("/avatar", new ShowAvatarController().handle)
.get("/uniques", new ShowUniqueController().handle)
.get("/cards", new ShowCardsContoller().handle)
.get("/all", new ShowAllController().handle)
.get("/deck/:id", isAuth, new ShowDeckController().handle)
export {router}