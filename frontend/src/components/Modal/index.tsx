import styles from './style.module.scss'
import {useContext} from 'react'
import { AuthContext } from '../../contexts/AuthContext'
AuthContext


type Props = {
    children: React.ReactNode
    text: string
}


export default function Modal({children, text}: Props){

    

    const closeModal = (event: React.MouseEvent):void=>{
        const modal = document.getElementById('modal')
        modal!.classList.add("hide")
    }

    return(
        <div id="modal" className='hide' >
            <div className={styles.fade} onClick={closeModal}>

            </div>
            <div className={styles.modal}>
                <h2>{text}</h2>
                {children}
            </div>
        </div>
    )
}