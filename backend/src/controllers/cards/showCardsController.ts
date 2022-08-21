import { Request, Response } from "express";
import { CreateCardsService } from "../../services/cards/createCardService";
//services
import { ShowAvatarService, ShowCardsService, ShowUniqueService } from "../../services/cards/showCardsServices";

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

class ShowCardsContoller{
    async handle(req:Request, res:Response){
        const showCards = new ShowCardsService

        const cardsDatas = await showCards.execute()

        return res.json(cardsDatas)
    }
}

class ShowAllController{
    async handle(req:Request, res:Response){
        //services
        const showAvatar = new ShowAvatarService
        const showUniques = new ShowUniqueService
        const showCards = new ShowCardsService
        //Info
        const avatars = await showAvatar.execute()
        const uniques = await showUniques.execute()
        const cards = await showCards.execute()

        return res.json([avatars, uniques, cards])
    }
}

export {ShowAvatarController, ShowUniqueController, ShowCardsContoller, ShowAllController}