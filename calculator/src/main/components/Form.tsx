import React, { useState } from 'react'
import styles from '../../../styles/Main.module.scss'
import AutoForm from './AutoForm';
import CustomForm from './CustomForm';

type Props = {
    setList: Function,
    list: Array<Object>
}
const Form = ({ setList, list }: Props) => {
    const [openCustomForm, setOpenCustomForm] = useState(false)
    return (
        <div className={styles.form}>
            <h2>Try It!</h2>
            <p>select</p>
            <AutoForm setList={setList} list={list}/>
            <p>or</p>
            <button onClick={() => { setOpenCustomForm(pre => !pre) }}>edit</button>
            {openCustomForm ? <CustomForm/> : null}
        </div>
    )
}


export default Form