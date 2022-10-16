import React, { useState } from 'react'
import styles from '../../../styles/Main.module.scss'
import SelectComponent from '../../components/Select'
import { Option } from 'react-select/lib/type';
import Input from '../../components/Input';
const options = require('../../data.json')
type Props = {
    setList: Function,
    list: Array<Object>
}
const AutoForm = ({ setList, list }: Props) => {
    const empty = {
        exempt: true,
        'extra-margin': true,
        label: '',
        price: 0,
        value: '',
        quantity: 0
    }
    const [stateForm, setStateForm] = useState(empty)
    const onChange = (option: Option | null) => {
        if (option){
            setStateForm(pre => ({
                ...pre.quantity,
                option
            }))
        }
        console.log(option)
    }

    return (
        <form className={styles.autoForm}>
            <SelectComponent error={false} onChange={onChange} options={options}/>
            <Input onChange={(value: string) => console.log(value)} error={false} type='number'>
                <div className={styles.formControl__Button}>
                    <div className={styles.formControl__Check}/>
                </div>
            </Input>
        </form>
    )
}


export default AutoForm