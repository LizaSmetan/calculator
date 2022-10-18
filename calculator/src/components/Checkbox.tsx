import React, { ReactNode } from 'react'
import styles from '../../styles/Main.module.scss'
type Props = {
    children?: ReactNode,
    onChange: Function,
    value: boolean
 }
const Checkbox = ({
    onChange, children, value
}:Props) => {
    return (
        <div className={styles.formControl}>
            <label className={styles.formControlCheckboxWrap}>
                <input checked={value} onChange={(e) => onChange(e.target.checked)} className={styles.formControlCheckboxInput} type={'checkbox'}/>
                <div className={styles.formControlCheckbox}>
                    <div className={styles.formControlCheckboxCheck}></div>
                </div>
                {children}
            </label>
        </div>
    )
}


export default Checkbox