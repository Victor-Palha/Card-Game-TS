import { DeckModel, AvatarModel, UniqueModel, CardsModel } from "../../models/Cards";
import prismaClient from "../../prisma";

class ShowAvatarService{
    async execute(){
        const avatars = await AvatarModel.find()
        return avatars
    }
}
class ShowUniqueService{
    async execute(){
        const uniques = await UniqueModel.find()
        return uniques
    }
}

class ShowCardsService{
    async execute(){
        const cards = await CardsModel.find()
        return cards
    }
}

class ShowDeckService{
    async execute(id: string){
        const decks = await prismaClient.deck.findMany({
            where:{
                id_user: id
            }, select:{
                id_mongo: true,
                name: true
            }
        })
        return decks
    }
}

export {ShowAvatarService, ShowUniqueService, ShowCardsService, ShowDeckService}