import { ReactNode, ButtonHTMLAttributes } from 'react'
import styles from './style.module.scss'
import {FaSpinner} from 'react-icons/fa'


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    children:string,
    loading?:boolean
}
export function Button({children, type, loading, ...rest}: ButtonProps){
    return(
        <button 
        className={styles.button} 
        type={type}
        disabled={loading}
        {...rest}
        >
            {loading? (<FaSpinner color='#FFF' size={16}/>)
            : (
            <a className={styles.textButton}>
                {children}
            </a>
            )}

        </button>
    )
}