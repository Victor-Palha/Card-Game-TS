import { Request, Response } from "express";
//Import models from src/models/Cards
import { DeckModel, AvatarModel, UniqueModel } from "../../models/Cards";
//Import services
import {CreateAvatarService} from "../../services/cards/createCardService";
import {CreateUniqueService} from "../../services/cards/createCardService";

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

class CreateUniqueController{
    async handle(req:Request, res:Response){
        //Card info from request
        const {name, set_name, effect, atk_acc, atk_dec, def_acc, def_dec, healing, duration, negate_target, url} = req.body
        //Instance Service
        const createUnique = new CreateUniqueService()

        const unique = await createUnique.execute({name, set_name, effect, atk_acc, atk_dec, def_acc, def_dec, healing, duration, negate_target, url})

        return res.json(unique)
    }
}

export {CreateAvatarController, CreateUniqueController}