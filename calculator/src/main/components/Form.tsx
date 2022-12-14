import React, { useContext, useState } from 'react'
import styles from '../../../styles/Main.module.scss'
import AutoForm from './AutoForm';
import CustomForm from './CustomForm';
import { useTranslation } from 'next-i18next'
import { GlobalContext } from '../../helpers/withContext';

const Form = () => {
    const { t } = useTranslation()
    const { list, setList } = useContext(GlobalContext)

    const [openCustomForm, setOpenCustomForm] = useState(false)
    return (
        <div className={`${styles.form} ${list.length ? styles.formInvoiceVisible : ''}`}>
            <h2>{t('common:calculate')}...</h2>
            <p className={styles.formInvoiceText}>{t('common:selectValueText')}</p>
            <AutoForm setList={setList} list={list}/>
            <p className={styles.formInvoiceAltText}>
                {t('common:or')}
                <button onClick={() => { setOpenCustomForm(pre => !pre) }}>{t('common:openFormText')}</button>
            </p>
            {openCustomForm ? <CustomForm setList={setList} list={list}/> : null}
        </div>
    )
}


export default Form