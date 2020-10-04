import React from 'react';
import styles from './RadioForm.module.scss';

const RadioForm = ({id, checked, changeFn, children}) => (
    <label className={styles.radio}>
        <input 
            id={id}
            type="radio"
            checked={checked}
            onChange={changeFn}
        />
        <div className={styles.radioButton} />
        {children}
    </label>
)

export default RadioForm;