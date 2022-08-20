import { Request, Response } from "express";
//services
import { ShowAvatarService, ShowUniqueService } from "../../services/cards/showCardsServices";

class ShowAvatarController{
    async handle(req:Request, res:Response){
        const showAvatar = new ShowAvatarService

        const avatarDatas = await showAvatar.execute()

        return res.json(avatarDatas)
    }
}

class ShowUniqueController{
    async handle(req:Request, res:Response){
        const showUniques = new ShowUniqueService

        const uniquesDatas = await showUniques.execute()

        return res.json(uniquesDatas)
    }
}

export {ShowAvatarController, ShowUniqueController}