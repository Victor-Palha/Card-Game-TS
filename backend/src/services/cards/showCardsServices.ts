import { DeckModel, AvatarModel, UniqueModel } from "../../models/Cards";

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

export {ShowAvatarService, ShowUniqueService}