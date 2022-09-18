interface AvatarCardI{
    name: string,
    type: string,
    set_name: string, 
    hp: number, 
    attack: number, 
    defense: number, 
    unique_skill: string[]
    url: string
}

interface UniqueCardI{
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

interface CardsI{
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

interface DeckI{
    user_id: string,
    name: string,
    avatar: AvatarCardI,
    unique_skill: UniqueCardI,
    cards: CardsI[]
}

export {AvatarCardI, UniqueCardI, CardsI, DeckI}