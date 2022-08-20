import { Request, Response } from "express";
//Import models from src/models/Cards
import { DeckModel, AvatarModel, UniqueModel } from "../../models/Cards";
//Import services
import {CreateAvatarService} from "../../services/cards/createCardService";

class CreateAvatarController{
    async handle(req:Request, res:Response){
        //card info from request
        const {name,type ,set_name, hp, attack, defense, unique_skill, url} = req.body
        //Instance Service
        const createAvatar = new CreateAvatarService()

        const avatar = await createAvatar.execute({name, type, set_name, hp, attack, defense, unique_skill, url})

        return res.json(avatar)
    }
}

export {CreateAvatarController}