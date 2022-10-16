import React, { useState, useEffect } from 'react'
import styles from '../../../styles/Main.module.scss'
import moment from 'moment'
import Table from '../../components/Table'
type Props = {
    setList: Function,
    list: Array<Object>
}
const Invoice = ({ setList, list }: Props) => {
    const [num, setNum] = useState(0)
    const [date, setDate] = useState('')
    useEffect(() => {
        setNum(Math.random() * 1000);
        setDate(moment().format('DD.MM.YYYY'))
    }, [])

    type item = {
        label: string,
        value: string,
        quantity: number,
        price: number,

    }
    const data = list.map((item: item) => [
        <div key='njdkmlf'>
            <p><strong>{item.value}</strong></p>
            <small>{item.label}</small>
        </div>,
        `$ ${item.price}`,
        `${item.quantity}`,
        `$ ${item.quantity * item.price}`,
        <div key='jdckdsmf' className={styles.close}>
            <div/>
            <div/>
        </div>
    ])
    return (
        <div className={styles.invoice}>
            <div className={styles.invoiceContent}>
                <div className={styles.invoiceHeader}>
                    <div>
                        <h1>HH Global</h1>
                        <ul>
                            <li>
                                <>
                                    <strong>Date:</strong> {date}
                                </>
                            </li>
                            <li>
                                <>
                                    <strong>Check:</strong> #{num}
                                </>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.invoiceHeaderButton}>
                        <button className={styles.button} >Print</button>
                    </div>
                </div>
                <Table
                    data={data}
                    thead={['ID/Description', 'Rate', 'Quantity', 'Subtotal', ' ']}
                />
            </div>
            <div className={styles.invoiceTotal}>
                <h6>Totals</h6>
                <hr/>
                <ul>
                    <li>
                        <p>Subtotal:</p>
                        <p>$12,345.00</p>
                    </li>
                    <li>
                        <p>Tax:</p>
                        <p>$12,345.00</p>
                    </li>
                    <li>
                        <p><strong>Total:</strong></p>
                        <p><strong>$12,345.00</strong></p>
                    </li>
                </ul>
                <hr />
                <div className={styles.invoiceTotalMail}>
                    <span className={styles.circle}/>
                    <p>
                        Thank you! — <a href='http://localhost:3000/cz'>yourename@gmail.com</a>
                    </p>
                </div>
            </div>
        </div>
    )
}


export default Invoice