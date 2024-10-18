import { ErrorMessage, FastField } from 'formik';
import React from 'react';

const Select = (props) => {
    const {name,label,options}=props
    return (
        <>
            <label className="py-2">{label}</label>
            <FastField as='select' className="form-control" name={name}>
                <option value=''>یک مورد را انتخاب کنید</option>
                {
                    options.map(o=>(
                        <option key={o.id} value={o.value}>{o.value}</option>
                    ))
                }
            </FastField>
            <ErrorMessage name={name} className='text-danger mt-2' component='small'/>
        </>
    );
}

export default Select;

