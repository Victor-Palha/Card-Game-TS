
import styles from './style.module.scss'
interface Avatar{
    _id: string,
    name: string,
    type: string,
    set_name: string, 
    hp: number, 
    attack: number, 
    defense: number, 
    unique_skill: string[]
    url: string
}
export function Avatar(avatar:Avatar[], {selectAvatar}){

    return(
        <div className={styles.cards}>
        {avatar.map((a)=>{
            return(
                <article key={a._id} onClick={()=>selectAvatar(a._id)}>
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
    )
}