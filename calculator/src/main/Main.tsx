import React, { useState } from 'react'
import styles from '../../styles/Main.module.scss'
import Invoice from './components/Invoice'
import Form from './components/Form'

const Main = () => {
    const [list, setList] = useState([])
    return (
        <div className={styles.container}>
            <div className={styles.flexContainer}>
                <Invoice setList={setList} list={list}/>
                <Form setList={setList} list={list}/>
            </div>
        </div>
    )
}


export default Main