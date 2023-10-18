import React from 'react';
import styles from './Input.module.scss'

export const Input = React.forwardRef(({label, placeholder, onChange, value, type = 'input'}, ref) => {
    return (
        <label className={styles.input}>
            {label}
            <input 
                type={type}
                ref={ref}
                className={styles.input__form}
                placeholder={placeholder} 
                value={value} 
                onChange={onChange}
            />
        </label>
    )
})