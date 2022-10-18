import React from 'react'
import styles from '../../../styles/Main.module.scss'
import Table from '../../components/Table';
import { useTranslation } from 'next-i18next'
import InvoiceHead from './InvoiceHead';
import InvoiceTotal from './InvoiceTotal';
import { calcTax, job } from '../../helpers/helpers';

type Props = {
    setList: Function,
    list: Array<job>
}
const Invoice = ({ setList, list }: Props) => {
    const { t } = useTranslation()

    const deleteItem = (index: number) => {
        const newList = [...list];
        newList.splice(index, 1);
        setList(newList)
    }

    const data = list.map((item, index) => {
        const total = calcTax(item)
        return [
            <div key={`listData_title_${index}`}>
                <p><strong>{item.value}</strong></p>
                <small>{item.label}</small>
            </div>,
            `$ ${item.price}`,
            `${item.quantity}`,
            `$ ${total}`,
            <div onClick={() => deleteItem(index)} key={`listData_delete_${index}`} className={styles.close}>
                <div/>
                <div/>
            </div>
        ]
    })

    return (
        <div className={`${styles.invoice} ${list.length ? styles.invoiceVisible : ''}`}>
            <div className={styles.invoiceContent}>
                <InvoiceHead/>
                <Table
                    data={data}
                    thead={[
                        t('common:description'),
                        t('common:price'),
                        t('common:quantity'),
                        t('common:amount'),
                        ' '
                    ]}
                />
            </div>
            <InvoiceTotal list={list}/>
        </div>
    )
}


export default Invoice