import React from 'react'
import styles from '../../styles/PriceList.module.scss'
import Table from '../components/Table'
const list = require('./../data');
import { useTranslation } from 'next-i18next'
import { item } from '../helpers/helpers';

const PriceList = () => {
    const { t } = useTranslation()

    const data = list.map((item:item, index:number) => [
        <strong key={`listData_title_${index}`}>
            {item.value}
        </strong>,
        t('common:' + item.value),
        <div
            className={styles.checkWrap}
            key={`listData_exempt_${index}`}>
            {item.exempt ? <div className={styles.check}/> : null}
        </div>,
        `$ ${item.price}`
    ])
    return (
        <div className={styles.container}>
            <div className={styles.priceList}>
                <Table
                    data={data}
                    thead={[
                        'ID',
                        t('common:description'),
                        t('common:exempt'),
                        t('common:price')
                    ]}
                />
            </div>
        </div>
    )
}


export default PriceList