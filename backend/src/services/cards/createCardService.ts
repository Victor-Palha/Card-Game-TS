import { DeckModel, AvatarModel, UniqueModel } from "../../models/Cards";
//Import interface
import { AvatarCard } from "../../interfaces/cardsInterfaces";


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
        if(nameAlreadyExists !== []){
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

export {CreateAvatarService}