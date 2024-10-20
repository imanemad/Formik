import { ErrorMessage, FastField } from 'formik';
import React from 'react';

const File = ({formik,name,label}) => {
    console.log(formik)
    return (
        <>
            <div className={`form-control w-50 ${formik.errors[name] && "ErrorForm"}`}>
                <input type='file' name={name} placeholder={label} onChange={e=>{
                    formik.setFieldValue(name,e.target.files[0])
                }}/>
            </div>
            <ErrorMessage name={name} className='text-danger' component='small'/>
            <small className='text-danger'>{formik.errors[name]}</small>
        </>
    );
}

export default File;
