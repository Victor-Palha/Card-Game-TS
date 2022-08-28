import {model, Schema} from "mongoose"

const deckSchema = new Schema({
    name: String,
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
    type: String,
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
const CardSchema = new Schema({
    name: String,
    type: String,
    set_name: String,
    effect: String,
    equipament: Boolean,
    duration: Number,
    atk_acc: Number,
    atk_dec: Number,
    def_acc: Number,
    def_dec: Number,
    half_damage: Boolean,
    self_damage: Number,
    change_atk: Boolean,
    block_damage: Boolean,
    healing_damage: Boolean,
    double_damage: Boolean,
    buy_card: Number,
    change_effect: Boolean,
    steal_card: Boolean,
    negate_target: Boolean,
    negate_all: Boolean,
    max_hand_cards: Number,
    url: String
})

export const DeckModel = model("Deck", deckSchema)
export const AvatarModel = model("Avatar", avatarSchema)
export const UniqueModel = model("Unique", uniqueSchema)
export const CardsModel = model("Card", CardSchema)