import { ErrorMessage, FastField } from 'formik';
import React, { Fragment } from 'react';

const Checkbox = (props) => {
    const {name,label,options,type}=props
    return (
        <>
            <label className="pt-2">{label}</label>
            <FastField className="form-control" name={name}>
                    {({field})=>{
                        return options.map(o=>(
                            <Fragment key={o.id}>
                                <div className='d-flex'>
                                    <input type={type} id={o.value} {...field} value={o.value} checked={field.value.includes(o.value)}/>
                                    <label htmlFor={o.value} className='mx-2'>{o.value}</label>
                                </div>
                            </Fragment>
                        ))
                    }}
            </FastField>
            <ErrorMessage name={name} className='text-danger mt-2' component='small'/>
        </>
    );
}

export default Checkbox;
