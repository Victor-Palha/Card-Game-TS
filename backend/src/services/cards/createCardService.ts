import { DeckModel, AvatarModel, UniqueModel } from "../../models/Cards";
//Import interface
import { AvatarCard, UniqueCard } from "../../interfaces/cardsInterfaces";


class CreateAvatarService{
    async execute({name, type, set_name, hp, attack, defense, unique_skill, url}: AvatarCard){
        //Validation info from request
        if(!name){
            throw new Error("name missing")
        }else if(!set_name){
            throw new Error("set name missing")
        }else if(!hp){
            throw new Error("hit point missing")
        }else if(!attack){
            throw new Error("attack missing")
        }else if(!defense){
            throw new Error("defense missing")
        }else if(!unique_skill){
            throw new Error("unique skill missing")
        }
        //Search name on database
        const nameAlreadyExists = await AvatarModel.find({name: name})
        if(nameAlreadyExists.length === 1){
            throw new Error("This Avatar is already exists on database!")
        }
        //If it's all okay insert on database
        try {
            const newAvatar = await AvatarModel.create({
                name: name,
                type: type,
                set_name: set_name,
                hp: hp,
                attack: attack,
                defense: defense,
                unique_skills: unique_skill,
                url: url
            })
            return newAvatar
        } catch (err) {
            throw new Error("Not possible connect to database... Try later!")
        }

    }
}

class CreateUniqueService{
    async execute({name, set_name, effect, atk_acc, atk_dec, def_acc, def_dec, healing, duration, negate_target, url}: UniqueCard){
        if(!name){
            throw new Error("Name missing")
        }else if(!set_name){
            throw new Error("Set name missing")
        }else if(!effect){
            throw new Error("Effect missing")
        }else if(!duration){
            throw new Error("Duration missing")
        }
        //Search name on database
        const nameAlreadyExists = await UniqueModel.find({name: name})
        if(nameAlreadyExists.length === 1){
            throw new Error("This card is already in database")
        }
        //if Okay insert
        try {
            const newUnique = await UniqueModel.create({
                name: name,
                set_name: set_name,
                effect: effect,
                atk_acc: atk_acc,
                atk_dec: atk_dec,
                def_acc: def_acc,
                def_dec: def_dec,
                healing: healing,
                duration: duration,
                negate_target: negate_target,
                url: url
            })
            return newUnique
        } catch (err) {
            throw new Error("Not possible connect to database... Try later!")
        }
    }
}

export {CreateAvatarService, CreateUniqueService}