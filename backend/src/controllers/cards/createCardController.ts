import { Request, Response } from "express";
//Import services
import {CreateAvatarService, CreateUniqueService, CreateCardsService} from "../../services/cards/createCardService";

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
        const {name, type, set_name, effect, atk_acc, atk_dec, def_acc, def_dec, healing, duration, negate_target, url} = req.body
        //Instance Service
        const createUnique = new CreateUniqueService()

        const unique = await createUnique.execute({name, type, set_name, effect, atk_acc, atk_dec, def_acc, def_dec, healing, duration, negate_target, url})

        return res.json(unique)
    }
}

class CreateCardController{
    async handle(req:Request, res:Response){
        //Card info from request
        const {name, type, set_name, effect, equipament, duration, atk_acc, atk_dec, def_acc, def_dec, half_damage, self_damage, change_atk, block_damage, healing_damage, double_damage, buy_card, change_effect, steal_card, negate_target, negate_all, max_hand_cards, url} = req.body
        //Instance Service
        const createCard = new CreateCardsService

        const card = await createCard.execute({name, type, set_name, effect, equipament, duration, atk_acc, atk_dec, def_acc, def_dec, half_damage, self_damage, change_atk, block_damage, healing_damage, double_damage, buy_card, change_effect, steal_card, negate_target, negate_all, max_hand_cards, url})

        return res.json(card)
    }
}


export {CreateAvatarController, CreateUniqueController, CreateCardController}