import { FastField } from 'formik';
import React from 'react';
import Loading from '../Loading';

const SubmitButton = () => {
    return (
        <FastField>
        {({form})=>{
            return(
                <button type='submit' className="btn btn-primary" disabled={form.isSubmitting}>
                    ذخیره
                    {form.isSubmitting?<Loading d_inline={true}/>:null}    
                </button>
            )
        }}
        </FastField>
    );
}

export default SubmitButton;
