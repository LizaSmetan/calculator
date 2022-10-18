import React, {
    useCallback, useMemo, useState
} from 'react'
import styles from '../../../styles/Main.module.scss'
import SelectComponent from '../../components/Select'
import Input from '../../components/Input';
import { useTranslation } from 'next-i18next'
import { job } from '../../helpers/helpers';
const data = require('../../data')
type Props = {
    setList: Function,
    list: Array<Object>
}
const AutoForm = ({ setList, list }: Props) => {
    const { t } = useTranslation()
    const options = data.map((item: job) => ({
        ...item,
        label: t('common:' + item.value)
    }))
    const empty = useMemo(() => ({
        exempt: true,
        label: '',
        price: 0,
        value: '',
        quantity: 0
    }), [])
    const [stateForm, setStateForm] = useState(empty)
    const [showError, setShowError] = useState(false)
    const onChange = useCallback((option: job) => {
        if (option){
            setStateForm(pre => ({
                ...option,
                quantity: pre.quantity
            }))
        } else {
            setStateForm(pre => ({
                ...empty,
                quantity: pre.quantity
            }))
        }
    }, [empty])
    const onChangeQuantity = useCallback((value: string) => {
        setStateForm(pre => ({
            ...pre,
            quantity: Number(value)
        }))
    }, [])
    const onBlurQuantity = useCallback((value: string) => {
        setStateForm(pre => ({
            ...pre,
            quantity: Math.floor(Number(value))
        }))
    }, [])

    const submitForm = (e: any) => {
        e.preventDefault()
        if (!stateForm.value || !stateForm.quantity){
            setShowError(true)
        } else {
            setShowError(false)
            setList([...list, stateForm])
            setStateForm(empty)
        }
    }
    return (
        <form onSubmit={submitForm} className={styles.autoForm}>
            <SelectComponent placeholder={t('common:selectValuePlaceholder')} value={stateForm} error={showError && !stateForm.value} onChange={onChange} options={options}/>
            <Input placeholder={t('common:quantity')} value={stateForm.quantity} onChange={onChangeQuantity} onBlur={onBlurQuantity} error={showError && !stateForm.quantity} type='number'>
                <button type='submit' className={styles.formControl__Button}>
                    <div className={styles.formControl__Check}/>
                </button>
            </Input>
        </form>
    )
}


export default AutoForm