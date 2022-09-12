import prismaClient from "../../prisma/"
import { DeckModel, AvatarModel, UniqueModel, CardsModel} from "../../models/Cards";
//Import interface
import {AvatarCardI, CardsI, UniqueCardI, DeckI } from "../../interfaces/cardsInterfaces";



class CreateAvatarService{
    async execute({name, type, set_name, hp, attack, defense, unique_skill, url}: AvatarCardI){
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
    async execute({name, type, set_name, effect, atk_acc, atk_dec, def_acc, def_dec, healing, duration, negate_target, url}: UniqueCardI){
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
                type: type,
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

class CreateCardsService{
    async execute({name, type, set_name, effect, equipament, duration, atk_acc, atk_dec, def_acc, def_dec, half_damage, self_damage, change_atk, block_damage, healing_damage, double_damage, buy_card, change_effect, steal_card, negate_target, negate_all, max_hand_cards, url}: CardsI){
        if(!name){
            throw new Error("Name missing")
        }else if(!type){
            throw new Error("Type missing")
        }else if(!set_name){
            throw new Error("Set name missing")
        }else if(!effect){
            throw new Error("Effect missing")
        }else if(!duration){
            throw new Error("Duration missing")
        }
        //Search name on database
        const nameAlreadyExists = await CardsModel.find({name: name})
        if(nameAlreadyExists.length === 1){
            throw new Error("This card is already in database")
        }
        //if Okay insert
        try {
            const newCard = await CardsModel.create({
                name: name,
                type: type,
                set_name: set_name,
                effect: effect,
                equipament: equipament,
                duration: duration,
                atk_acc: atk_acc,
                atk_dec: atk_dec,
                def_acc: def_acc,
                def_dec: def_dec,
                half_damage: half_damage,
                self_damage: self_damage,
                change_atk: change_atk,
                block_damage: block_damage,
                healing_damage: healing_damage,
                double_damage: double_damage,
                buy_card: buy_card,
                change_effect: change_effect,
                steal_card: steal_card,
                negate_target: negate_target,
                negate_all: negate_all,
                max_hand_cards: max_hand_cards,
                url: url
            })

            return newCard
        } catch (err) {
            throw new Error("Not possible connect to database... Try later!")
        }
    }
}

class createDeckService{
    async execute({name, avatar, cards, unique_skill, user_id}:DeckI){
        //Validation
        if(!name){
            throw new Error("Name missing")
        }
        if(!avatar){
            throw new Error("Avatar missing")
        }
        //Insert
        try {
            const newDeck = await DeckModel.create({
                avatar: avatar,
                cards: cards,
                unique_skill: unique_skill
            })
            
            const mongoID = newDeck._id.toString()


            const deckRelation = await prismaClient.deck.create({
                data:{
                    id_mongo: mongoID,
                    id_user: user_id,
                    name: name,
                    stars: 0,
                }
            })

            return newDeck
        } catch (err) {
            throw new Error("Not possible connect to database... Try later!")
        }
    }
}

export {CreateAvatarService, CreateUniqueService, CreateCardsService, createDeckService}