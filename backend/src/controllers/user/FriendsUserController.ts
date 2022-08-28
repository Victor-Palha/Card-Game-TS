import { Response, Request} from "express";
import { AllFriendsService } from "../../services/user/FriendsUserService";

class AllFriendsController{
    async handle(req:Request, res:Response){

        const user_id = req.user_id

        const allFriends = new AllFriendsService
        const friends = await allFriends.execute(user_id)

        return res.json(friends)

    }
}

export {AllFriendsController}