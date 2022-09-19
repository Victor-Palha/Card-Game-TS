import styles from "./styles.module.scss"
import { useContext } from "react";
import { CardsContext, CardsProvider } from "../../contexts/CardsContext";

export function Avatar(){
    const {avatar} = useContext(CardsContext)
    return(
    <div className={styles.capsule}>
                <h1>Avatares</h1>
                <div className={styles.cards}>
                {avatar.map((a)=>{
                    return(
                        <article key={a._id}>
                            <h1 key={a._id}>{a.name}</h1>
                            <p>Tipo: {a.type}</p>
                            <div className={styles.status}>
                                <p>Atk: {a.attack}</p>
                                <p>Def: {a.defense}</p>
                                <p>Hp: {a.hp}</p>
                            </div>
                        </article>
                    )
                })}
                </div>
            </div>
    )
}
type Cards = {
    validation: string,
    inDeck?: string[],
    addCard?: (id:string)=>void,
    removeCard?: (id:string)=>void
}

export function Cards({validation, addCard}: Cards){
    const {cards} = useContext(CardsContext)

    return(
        <div className={styles.capsule}>
            <h1>{validation} Cards</h1>
            <div className={styles.cards}>
                {cards.map((card)=>{
                    if(card.type == `${validation}`){
                        return(
                            <article key={card._id} onClick={()=>addCard(card._id)}>
                                <h1 key={card._id}>{card.name}</h1>
                                <p>Tipo: {card.type}</p>
                                <p>Set: {card.set_name}</p>
                                <div className={styles.effect}>
                                    <span>{card.effect}</span>
                                </div>
                            </article>
                        )
                    }
                })}
            </div>
        </div>
    )
}
export function DeckCards({validation, inDeck, removeCard}: Cards){
    const {cards} = useContext(CardsContext)

    return(
        <div className={styles.capsule}>
            <h1>{validation} Cards</h1>
            <div className={styles.cards} id={styles.inDeck}>
                {cards.map((card)=>{
                    for(let i = 0; i < inDeck.length; i++){
                        if(card._id == inDeck[i]){
                            return(
                                <article key={card._id} onClick={()=>removeCard(card._id)}>
                                    <h1 key={card._id}>{card.name}</h1>
                                    <p>Tipo: {card.type}</p>
                                    <p>Set: {card.set_name}</p>
                                    <div className={styles.effect}>
                                        <span>{card.effect}</span>
                                    </div>
                                </article>
                            )
                        }
                    }
                })}
            </div>
        </div>
    )}
