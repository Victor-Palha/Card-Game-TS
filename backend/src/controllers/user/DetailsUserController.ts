import { Response, Request} from "express";
import { DetailsUserService } from "../../services/user/DetailsUserService";

class DetailsUserController{
    async handle(req:Request, res:Response){

        //user_id from the middleware isAuth.ts
        const user_id = req.user_id
        const DetailsUser = new DetailsUserService()

        const user = await DetailsUser.execute(user_id)

        return res.json(user)
    }
}

export {DetailsUserController}