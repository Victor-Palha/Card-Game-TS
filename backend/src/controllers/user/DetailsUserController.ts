import { Response, Request} from "express";
import { DetailsUserService } from "../../services/user/DetailsUserService";

class DetailsUserController{
    async handle(req:Request, res:Response){

        const DetailsUser = new DetailsUserService()

        const user = await DetailsUser.execute()

        return res.json(user)
    }
}

export {DetailsUserController}