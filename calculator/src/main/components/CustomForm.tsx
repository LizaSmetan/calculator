import React from 'react'
import styles from '../../../styles/Main.module.scss'
import Checkbox from '../../components/Checkbox'
import Input from '../../components/Input'

const CustomForm = () => {
    return (
        <form className={styles.customForm}>
            <div className={styles.customFormRow}>
                <Input onChange={() => {}} error={false} type={'text'}>
                    <div className={styles.formControl__Button}>
                        <div className={styles.formControl__Check}/>
                    </div>
                </Input>
            </div>
            <div className={styles.customFormRow}>
                <Input onChange={() => {}} error={false} type={'number'}>
                    <div className={styles.formControl__Button}>
                        <div className={styles.formControl__Check}/>
                    </div>
                </Input>
                <Input onChange={() => {}} error={false} type={'number'}>
                    <div className={styles.formControl__Button}>
                        <div className={styles.formControl__Check}/>
                    </div>
                </Input>
            </div>
            <div className={styles.customFormRow}>
                <Checkbox onChange={(e:any) => { console.log(e) }}>test</Checkbox>
                <Checkbox onChange={(e:any) => { console.log(e) }}>test</Checkbox>
                <Checkbox onChange={(e:any) => { console.log(e) }}>test</Checkbox>
            </div>
        </form>
    )
}


export default CustomForm