import React, { ReactNode } from 'react'
import styles from '../../styles/Main.module.scss'
type Props = {
    children?: ReactNode,
    type: string,
    error: Boolean,
    onChange: Function
 }
const Input = ({
    type, error, onChange, children
}:Props) => {
    return (
        <div className={styles.formControl}>
            <input onKeyDown={(e) => onChange(e)} className={`${styles.formControlInput} ${error ? styles.formControlInput__Error : ''}`} type={type}/>
            {error ? <div className={styles.formControl__Button}><div className={styles.formControlInput__ErrorSign}>!</div></div> : children}
        </div>
    )
}


export default Input