import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../services/errors/apiClient";

type CardsContextData = {
    avatar: Avatar[],
    unique: {},
    cards: Cards[]
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

type CardsProviderProps = {
    children: ReactNode
}

export const CardsContext = createContext({} as CardsContextData)

export function CardsProvider({children}: CardsProviderProps){

    const [avatar, setAvatar] = useState([])
    const [unique, setUnique] = useState([])
    const [cards, setCards] = useState([])

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
    })

    return(
        <CardsContext.Provider value={{avatar, unique, cards}}>
            {children}
        </CardsContext.Provider>
    )
}
