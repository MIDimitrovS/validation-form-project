import React from 'react'
import styles from './index.module.css'

const Input = ({
    type,
    id,
    name,
    placeHolder,
    label,
    onChange,
    value,
    required = true,
}) => {
    return (
        <div className={styles.container}>
            <label className={styles.label} htmlFor={id}>
                {label}:
            </label>
            <input
                type={type}
                id={id}
                name={name}
                className={styles.formControl}
                placeholder={placeHolder}
                value={value}
                autoFocus=""
                required={required}
                onChange={onChange}
            />
        </div>
    )
}

export default Input