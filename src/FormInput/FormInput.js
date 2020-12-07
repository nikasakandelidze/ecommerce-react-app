import React from 'react'
import './FormInput.scss'

const FormInput = ({handleChange, label, ...otherProps}) => {
    return (<div className='group'>
        <div className='label'>{label}</div>
        <input className='form-input' required onChange={handleChange} {...otherProps}/>
    </div>);
};

export default FormInput;