import React, { useState, useEffect } from 'react'
import styles from '../../../styles/Main.module.scss'
import moment from 'moment'
import { useTranslation } from 'next-i18next'
const settings = require('../../settings');

const InvoiceHead = () => {
    const { t } = useTranslation()
    const [num, setNum] = useState(0)
    const [date, setDate] = useState('')
    useEffect(() => {
        setNum(Math.floor(Math.random() * 1000));
        setDate(moment().format('DD.MM.YYYY'))
    }, [])

    return (
        <div className={styles.invoiceHeader}>
            <div>
                <h1>{settings.company}</h1>
                <ul>
                    <li>
                        <>
                            <strong>{t('common:dateLabel')}:</strong> {date}
                        </>
                    </li>
                    <li>
                        <>
                            <strong>{t('common:checkLabel')}:</strong> #{num}
                        </>
                    </li>
                </ul>
            </div>
            {/* <div className={styles.invoiceHeaderButton}>
                <button className={styles.button} >{t('common:print')}</button>
            </div> */}
        </div>
    )
}


export default InvoiceHead