import { FastField } from 'formik';
import React from 'react';

const SwitchForm = ({type,name,label}) => {
    return (
        <div className="form-check form-switch">
            <FastField className="form-check-input" type={type} name={name}/>
            <label className="form-check-label" >{label}</label>
        </div>
    );
}

export default SwitchForm;
