import React, { useCallback, useState } from 'react'
import styles from '../../../styles/Main.module.scss'
import Checkbox from '../../components/Checkbox'
import Input from '../../components/Input'
import { useTranslation } from 'next-i18next'

type Props = {
    setList: Function,
    list: Array<Object>
}
const CustomForm = ({ setList, list }: Props) => {
    const { t } = useTranslation()

    const empty = {
        exempt: true,
        label: '',
        value: ' ',
        quantity: 0,
        price: 0
    }
    const [stateForm, setStateForm] = useState(empty)
    const [showError, setShowError] = useState(false)
    const onChangeFunction = useCallback((name: string) => (value: string, type: string) => {
        const newValue = type === 'number'
            ? Number(value)
            : value;
        setStateForm(pre => ({
            ...pre,
            [name]: newValue
        }))
    }, [])
    const onBlurFunction = useCallback((name: string) => (value: string, step: number) => {
        const decimals = `${step}`.split('.')[1]?.length
        const newValue = decimals
            ? Number(value)
                .toFixed(decimals)
                .replace(',', '.')
            : Math.floor(Number(value));
        setStateForm(pre => ({
            ...pre,
            [name]: newValue
        }))
    }, [])

    const submitForm = (e: any) => {
        e.preventDefault()
        if (!stateForm.label || !stateForm.quantity || !stateForm.price){
            setShowError(true)
        } else {
            setShowError(false)
            setList([...list, stateForm])
            setStateForm(empty)
        }
    }
    return (
        <form onSubmit={submitForm} className={styles.customForm}>
            <div className={styles.customFormRow}>
                <Input placeholder={t('common:inputValuePlaceholder')} error={showError && !stateForm.label} value={stateForm.label} onChange={onChangeFunction('label')} type={'text'}/>
            </div>
            <div className={styles.customFormRow}>
                <Input onBlur={onBlurFunction('price')} placeholder={t('common:price')} error={showError && !stateForm.price} value={stateForm.price} onChange={onChangeFunction('price')} step={0.01} type={'number'}/>
                <Input onBlur={onBlurFunction('quantity')} placeholder={t('common:quantity')} error={showError && !stateForm.quantity} value={stateForm.quantity} onChange={onChangeFunction('quantity')} step={1} type={'number'}>
                    <button type='submit' className={styles.formControl__Button}>
                        <div className={styles.formControl__Check}/>
                    </button>
                </Input>
            </div>
            <div className={styles.customFormRow}>
                <Checkbox value={stateForm.exempt} onChange={onChangeFunction('exempt')}>{t('common:exempt')}</Checkbox>
            </div>
        </form>
    )
}


export default CustomForm