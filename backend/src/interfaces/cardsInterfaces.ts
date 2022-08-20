interface AvatarCard{
    name: string,
    type: string,
    set_name: string, 
    hp: number, 
    attack: number, 
    defense: number, 
    unique_skill: string[]
    url: string
}

interface UniqueCard{
    name: string,
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
export {AvatarCard, UniqueCard}