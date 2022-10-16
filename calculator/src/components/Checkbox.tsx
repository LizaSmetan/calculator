import React, { ReactNode } from 'react'
import styles from '../../styles/Main.module.scss'
type Props = {
    children?: ReactNode,
    onChange: Function
 }
const Checkbox = ({ onChange, children }:Props) => {
    return (
        <div className={styles.formControl}>
            <label className={styles.formControlCheckboxWrap}>
                <input onChange={(e) => onChange(e)} className={styles.formControlCheckboxInput} type={'checkbox'}/>
                <div className={styles.formControlCheckbox}>
                    <div className={styles.formControlCheckboxCheck}></div>
                </div>
                {children}
            </label>
        </div>
    )
}


export default Checkbox