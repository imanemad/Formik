/* eslint-disable no-empty-character-class */
import axios from 'axios';
import { FastField, Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';

const initialValues={
    // email:'',
    mobile:'',
    password:'',
    c_password:''
}

const onSubmit=(values)=>{
    axios.post('http://authservice.azhadev.ir/api/auth/register',values)
        .then(res=>console.log(res))
}

const validationSchema=Yup.object({
    mobile: Yup
        .number()
        .required('لطفا این قسمت را پر کنید'),
    // email:Yup
    //     .string()
    //     .required('لطفا این قسمت را پر کنید')
    //     .email('لطفا قالب ایمیل را رعایت فرمایید مثل exam.ple@gmail.com'),
    password:Yup
        .string()
        .required('لطفا این قسمت را پر کنید')
        .min(8,'حداقل ۸ کارکتر داشته باشد')
        .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,'حداقل یک حرف بزرگ و یک حرف کوچک لاتین و اعداد و کارکترهای خاص استفاده کنید'),
    c_password:Yup
        .string()
        .oneOf([Yup.ref('password'),''],'با رمز عبور مطابقت ندارد')    
        .required('لطفا این قسمت را پر کنید'),    
})

const Login = () => {
    return (
        <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}>
            {formik=>(
                <Form className='D-Full-Center'>
                    <h1>ورود افراد</h1>
                    <FastField type="text" 
                            className={`form-control w-50 ${(formik.errors.mobile && formik.touched.mobile) && "ErrorForm"}`}  placeholder='شماره موبایل' name='mobile'/>
                    {(formik.errors.mobile && formik.touched.mobile) && <small className='text-danger'>{formik.errors.mobile}</small>}
                    <FastField type="text" 
                            className={`form-control w-50 ${(formik.errors.password && formik.touched.password) && "ErrorForm"}`} placeholder='پسورد' name='password'/>
                    {(formik.errors.password && formik.touched.password) && <small className='text-danger'>{formik.errors.password}</small>}
                    <FastField type="text" 
                            className={`form-control w-50 ${(formik.errors.c_password && formik.touched.c_password) && "ErrorForm"}`} placeholder='تایید پسورد' name='c_password'/>
                    {(formik.errors.c_password && formik.touched.c_password) && <small className='text-danger'>{formik.errors.c_password}</small>}
                    <button className='btn btn-primary w-50'>ورود</button>
                    <span>فراموش کرده اید؟</span>
                    <span>ثبت نام</span>
                </Form>
            )}
        </Formik>
    );
}

export default Login;
