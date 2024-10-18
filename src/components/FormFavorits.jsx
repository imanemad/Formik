import { ErrorMessage, Field } from 'formik';
import React from 'react';

const FormFavorits = (props) => {
    const {form,push,remove}=props
    const {favorits}=form.values

    return (
        <>
            <div className='FlexBetween my-2'>
                <label className="py-2 ">علاقه مندیها</label>
                <div className='btn btn-primary Cursor' onClick={()=>push('')}>افزودن</div>
            </div>
            {favorits.map((f,i)=>(
                <div key={i}>
                    <Field type="text" className="form-control mb-2" name={`favorits[${i}]`}/>
                    {
                        favorits.length> 1 && <span className='text-primary Cursor' onClick={()=>remove(i)}>کاهش</span>
                    }
                    <ErrorMessage name={`favorits[${i}]`} className='text-danger mt-2' component='small'/>
                </div>
            ))}
        </>
    );
}

export default FormFavorits;
