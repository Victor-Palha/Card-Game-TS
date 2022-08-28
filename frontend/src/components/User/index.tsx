interface UserProps{
    username: string
    id: string
    email: string
}

import styles from './style.module.scss'

export default function User({username, id, email}: UserProps){
    return (
        <div className={styles.userInfo}>
            <p>Nome de usuário: {username}</p>
            <p>ID: {id}</p>
            <p>Email: {email}</p>
        </div>
    )
}