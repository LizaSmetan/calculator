import React, { useState } from 'react'
import styles from '../../../styles/Main.module.scss'
import { useTranslation } from 'next-i18next'
import Checkbox from '../../components/Checkbox';
import {
    calcTax, job, roundToEvenFixed
} from '../../helpers/helpers';
const settings = require('../../settings');

type Props = {
    list: Array<job>,
}
const InvoiceTotal = ({ list }: Props) => {
    const [extraMargin, setExtraMargin] = useState(false)

    const { t } = useTranslation()

    const totalWithTaxes = list.reduce((acc, val) => acc + calcTax(val), 0);
    const totalWithinTaxes = list.reduce((acc, val) => acc + val.quantity * val.price, 0);

    const extraMarginValue = totalWithinTaxes * (extraMargin
        ? (settings['margin'] + settings['extra-margin']) / 100
        : settings['margin'] / 100);

    const total = roundToEvenFixed(totalWithTaxes + extraMarginValue);

    return (
        <div className={styles.invoiceTotal}>
            <div className={styles.invoiceTotalHead}>
                <h6>{t('common:totals')}</h6>
                <Checkbox value={extraMargin} onChange={(value:boolean) => setExtraMargin(value) }>{t('common:extraMargin')}</Checkbox>
            </div>
            <hr/>
            <ul>
                <li>
                    <p>{t('common:subtotal')}:</p>
                    <p>$ {totalWithTaxes.toFixed(2)}</p>
                </li>
                <li>
                    <p>{t('common:tax')}:</p>
                    <p>$ {extraMarginValue.toFixed(2)}</p>
                </li>
                <li>
                    <p><strong>{t('common:total')}:</strong></p>
                    <p><strong>$ {total.toFixed(2)}</strong></p>
                </li>
            </ul>
            <hr />
            <div className={styles.invoiceTotalMail}>
                <span className={styles.circle}/>
                <p>
                    {t('common:thanks')}!{settings.mail ? <> — <a href={`mailto:${settings.mail}`}>{settings.mail}</a></> : null}
                </p>
            </div>
        </div>
    )
}


export default InvoiceTotal