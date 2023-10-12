import React from 'react';
import './Input.scss';

export const Input = React.forwardRef(({label, placeholder, onChange, value, type = 'input'}, ref) => {
    return (
        <label className='input'>
            {label}
            <input 
                type={type}
                ref={ref}
                className='input__form'
                placeholder={placeholder} 
                value={value} 
                onChange={onChange}
            />
        </label>
    )
})