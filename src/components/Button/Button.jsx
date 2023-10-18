import styles from './Button.module.scss'

export const Button = ({onClick, text}) => {
    return (
        <button
            type='button'
            onClick={onClick} 
            className={styles.button}
        >
            {text}
        </button>    
    )   
}