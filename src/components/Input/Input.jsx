import React from 'react';
import styles from './Input.module.scss';

export const Input = ({ label, placeholder, onChange, value, type = 'input', min }) => {
  const handleChangeInput = (ev) => onChange(ev.target.value);
  return (
    <label className={styles.input}>
      {label}
      <input
        type={type}
        className={styles.input__form}
        placeholder={placeholder}
        value={value}
        onChange={handleChangeInput}
        min={min}
      />
    </label>
  );
};
