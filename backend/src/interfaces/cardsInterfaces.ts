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
}


export {AvatarCardI, UniqueCardI, CardsI}