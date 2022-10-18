import React from 'react'
import styles from '../../styles/Main.module.scss'
import Invoice from './components/Invoice'
import Form from './components/Form'

const Main = () => {
    return (
        <div className={styles.container}>
            <div className={styles.flexContainer}>
                <Invoice/>
                <Form/>
            </div>
        </div>
    )
}


export default Main