import React, { ReactNode } from 'react'
import Select from 'react-select';
import { Option } from 'react-select/lib/type';

import styles from '../../styles/Main.module.scss'
type Props = {
    children?: ReactNode,
    options: Array<object>,
    error: Boolean,
    onChange: Function
 }

const SelectComponent = ({
    onChange, children, options, error
}:Props) => {
    const onChangeFunc = (option: Option | null) => {
        onChange(option)
    }
    const customStyles = {
        menu: (provided: any) => ({
            ...provided, margin: '0', 'border-radius': '0'
        }),
        option: () => ({
            'border-bottom': '1px solid #DADEE3',
            'border-radius': '0',
            padding: '0.8rem 1.5rem',
            cursor: 'pointer'
        }),
        control: () => ({
            display: 'flex',
            background: 'white',
            'align-items': 'center',
            'justify-content': 'space-between',
            width: '100%',
            border: '1px solid #DADEE3',
            'border-radius': '0',
            padding: '0.8rem 0.5rem 0.8rem 1.5rem',
            'font-size': '1rem',
            cursor: 'pointer',
            height: '50px'
        }),
        indicatorsContainer: () => ({ display: 'flex' }),
        valueContainer: () => ({ display: 'flex' }),
        multiValueLabel: () => ({}),
        multiValueRemove: () => ({}),
        input: () => ({}),
        singleValue: () => ({}),
        indicatorSeparator: () => ({})
    }
    return (
        <div className={styles.formControl}>
            <Select isClearable={true} styles={customStyles} onChange={onChangeFunc} options={options}/>
            {error ? <div className={styles.formControl__Button}><div className={styles.formControlInput__ErrorSign}>!</div></div> : children}
        </div>
    )
}


export default SelectComponent