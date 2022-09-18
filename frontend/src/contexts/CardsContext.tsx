import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../services/errors/apiClient";

type CardsContextData = {
    avatar: Avatar[],
    unique: UniqueCardI[],
    cards: Cards[],
    addAvatar: (id:string) => void,
    addCard: (id:string) => void,
    removeCard: (id:string) => void,
    avatarDeck: string,
    uniqueDeck: string,
    cardsDeck: string[]
}

type Avatar = {
    _id: string,
    name: string,
    type: string,
    set_name: string, 
    hp: number, 
    attack: number, 
    defense: number, 
    unique_skills: [],
    url: string
}

type Cards = {
    _id: string,
    name: string,
    type: string,
    set_name: string,
    effect: string,
    equipament: boolean,
    duration: number,
    atk_acc: number,
    atk_dec: number,
    def_acc: number,
    def_dec: number,
    half_damage: boolean,
    self_damage: number,
    change_atk: boolean,
    block_damage: boolean,
    healing_damage: boolean,
    double_damage: boolean,
    buy_card: number,
    change_effect: boolean,
    steal_card: boolean,
    negate_target: boolean,
    negate_all: boolean,
    max_hand_cards: number,
    url: string
}

type UniqueCardI = {
    name: string,
    type: string,
    set_name: string,
    effect: string,
    atk_acc: number,
    atk_dec: number,
    def_acc: number,
    def_dec: number,
    healing: number,
    duration: number,
    negate_target: boolean,
    url: string
}

type CardsProviderProps = {
    children: ReactNode
}

export const CardsContext = createContext({} as CardsContextData)

export function CardsProvider({children}: CardsProviderProps){

    const [avatar, setAvatar] = useState([])
    const [unique, setUnique] = useState([])
    const [cards, setCards] = useState([])

    const [avatarDeck, setAvatarDeck] = useState("")
    const [uniqueDeck, setUniqueDeck] = useState("")
    const [cardsDeck, setCardsDeck] = useState<string[]>([])

    useEffect(()=>{
        async function getCards(){
            //Get DATAS from API MongoDB
            const responseAvatar = await api.get("/avatar")
            const responseUniques = await api.get("/uniques")
            const responseCards = await api.get("/cards")

            setAvatar(responseAvatar.data)
            setCards(responseCards.data)
            setUnique(responseUniques.data)
        }
        getCards()
    },[cardsDeck])

    function addAvatar(id:string){
        return id
    }
    function addCard(id:string){
        setCardsDeck([...cardsDeck, id])
        console.log(cardsDeck)
    }
    function removeCard(id:string){
        const index = cardsDeck.indexOf(id);
        if (index > -1) { // only splice array when item is found
            cardsDeck.splice(index, 1); // 2nd parameter means remove one item only
        }
        console.log(cardsDeck)
    }

    return(
        <CardsContext.Provider value={{avatar, unique, cards, addAvatar, addCard, removeCard, avatarDeck, uniqueDeck, cardsDeck}}>
            {children}
        </CardsContext.Provider>
    )
}
