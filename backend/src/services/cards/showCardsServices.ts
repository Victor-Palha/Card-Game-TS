import { DeckModel, AvatarModel, UniqueModel, CardsModel } from "../../models/Cards";

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


export {ShowAvatarService, ShowUniqueService, ShowCardsService}