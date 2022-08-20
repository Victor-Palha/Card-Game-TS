import {model, Schema} from "mongoose"

const deckSchema = new Schema({
    avatar: String,
    offensive: [String],
    deffensive: [String],
    ability: [String],
    unique_skill: [String]
})
const avatarSchema = new Schema({
    name: String,
    type: String,
    set_name: String,
    hp: Number,
    attack: Number,
    defense: Number,
    unique_skills: [String],
    url: String
})
const uniqueSchema = new Schema({
    name: String,
    set_name: String,
    effect: String,
    atk_acc: Number,
    atk_dec: Number,
    def_acc: Number,
    def_dec: Number,
    healing: Number,
    duration: Number,
    negate_target: Boolean,
    url: String
})

export const DeckModel = model("Deck", deckSchema)
export const AvatarModel = model("Avatar", avatarSchema)
export const UniqueModel = model("Unique", uniqueSchema)