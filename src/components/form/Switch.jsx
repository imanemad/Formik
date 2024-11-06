import { FastField } from 'formik';
import React from 'react';

const Switch = ({name,label}) => {
    return (
        <div className="form-check form-switch d-flex">
            <FastField className="form-check-input pointer" type="checkbox" id={name} name={name}/>
            <label className="form-check-label pointer me-5" htmlFor={name}>{label}</label>
        </div>
    );
}

export default Switch;