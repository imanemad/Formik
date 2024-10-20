import { ErrorMessage, FastField } from 'formik';
import React from 'react';

const Input = ({formik,name,label,type}) => {
    return (
        <>
            <FastField type={type} className={`form-control w-50 ${(formik.errors[name] && formik.touched[name]) && "ErrorForm"}`} name={name} placeholder={label}/>
            <ErrorMessage name={name} className='text-danger' component='small'/>
        </>
    );
}

export default Input;
