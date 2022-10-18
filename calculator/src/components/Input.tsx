import React, { ReactNode } from 'react'
import styles from '../../styles/Main.module.scss'
type Props = {
    children?: ReactNode,
    type: string,
    error: Boolean,
    onChange?: Function,
    value: string | number,
    placeholder: string,
    step?: number,
    onBlur?: Function | undefined
 }
const Input = ({
    type, error, onChange, onBlur, children, value, placeholder, step
}:Props) => {
    return (
        <div className={styles.formControl}>
            <input step={step} placeholder={placeholder} value={value || ''}
                onChange={onChange ? (e) => onChange(e.target.value, type) : undefined}
                onBlur={onBlur ? (e) => onBlur(e.target.value, step) : undefined}
                className={`${styles.formControlInput} ${error ? styles.formControlInput__Error : ''}`} type={type}/>
            {error ? <div className={`${styles.formControl__Button} ${styles.formControl__Button_transparent}`}><div className={styles.formControlInput__ErrorSign}>!</div></div> : children}
        </div>
    )
}


export default Input