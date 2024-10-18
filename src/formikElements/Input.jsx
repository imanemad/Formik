import { ErrorMessage, FastField } from 'formik';
import React from 'react';

const Input = (props) => {
    const {name,label,type}=props
    return (
        <>
            <label className="py-2">{label}</label>
            <FastField type={type} className="form-control" name={name}/>
            <ErrorMessage name={name} className='text-danger mt-2' component='small'/>
        </>
    );
}

export default Input;
