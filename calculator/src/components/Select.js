import React, { useEffect, useRef } from 'react'
import Select from 'react-select';

import styles from '../../styles/Main.module.scss'

const customStyles = {
    menu: (provided) => ({
        ...provided, margin: '0', borderRadius: '0'
    }),
    option: () => ({
        borderBottom: '1px solid #DADEE3',
        borderRadius: '0',
        padding: '0.8rem 1.5rem',
        cursor: 'pointer'
    }),
    control: () => ({
        display: 'flex',
        background: 'white',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        border: '1px solid #DADEE3',
        borderRadius: '0',
        padding: '0.8rem 0.5rem 0.8rem 1.5rem',
        fontSize: '1rem',
        cursor: 'pointer',
        height: '50px'
    }),
    indicatorsContainer: () => ({ display: 'flex' }),
    valueContainer: () => ({
        width: '80%',
        height: '20px',
        display: 'flex',
        position: 'relative'
    }),
    multiValueLabel: () => ({}),
    multiValueRemove: () => ({}),
    input: () => ({
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%'
    }),
    singleValue: () => ({
        maxWidth: '100%',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'

    }),
    indicatorSeparator: () => ({})
}
const SelectComponent = ({
    onChange, options, error, value, placeholder
}) => {
    const ref = useRef()
    const onChangeFunc = (option) => {
        onChange(option)
    }
    useEffect(() => {
        ref.current = document.body
    }, [])
    return (
        <div className={styles.formControl}>
            <Select menuPortalTarget={ref.current} placeholder={placeholder} value={value.value ? value : null} isClearable={true} styles={customStyles} onChange={onChangeFunc} options={options}/>
            {error ? <div className={`${styles.formControl__Button} ${styles.formControl__Button_transparent}`}><div className={styles.formControlInput__ErrorSign}>!</div></div> : null}
        </div>
    )
}


export default SelectComponent