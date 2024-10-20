/* eslint-disable eqeqeq */
import { ErrorMessage, FastField } from 'formik';
import React, { Fragment } from 'react';

const Radio = (props) => {
    const {name,label,options,type}=props
    return (
        <div className='d-flex align-items-center'>
            <label className="p-2">{label}</label>
            <FastField className="form-control" name={name}>
                {({field})=>{
                    return options.map(o=>(
                        <Fragment key={o.id}>
                            <div className='d-flex'>
                                <input type={type} id={o.id} {...field} value={o.id} checked={field.value == o.id}/>
                                <label htmlFor={o.id} className='mx-2'>{o.value}</label>
                            </div>
                        </Fragment>
                    ))
                }}
            </FastField>
            <ErrorMessage name={name} className='text-danger mt-2' component='small'/>
        </div>
    );
}

export default Radio;
