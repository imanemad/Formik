/* eslint-disable no-empty-character-class */
import { ErrorMessage, Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import FormikControl from '../../formikElements/FormikControl';
import axios from 'axios';

const initialValues={
    user_name:'',
    first_name:'',
    last_name:'',
    email:'',
    mobile:'',
    password:'',
    confirm_password:'',
    auth_mode:'mobile',
    image:null
}

const onSubmit=(values)=>{
    console.log(values)
    let formData=new FormData();
    formData.append('user_name',values.user_name)
    formData.append('mobile',values.mobile)
    formData.append('password',values.password)
    formData.append('image',values.image)

    axios.post('url',formData,{headers:{'Content-Type':'multipart/form-data'}})
}

const validationSchema=Yup.object({
    user_name:Yup
        .string()
        .matches(/^[0-9a-zA-Z]+$/,'از کاکترهای خاص استفاده نشود')
        .required('لطفا این قسمت را پر کنید'),

    first_name:Yup
        .string()    
        .matches(/^[\u0600-\u06FF\s0-9a-zA-Z]+$/,'از کاکترهای خاص استفاده نشود'),
    last_name:Yup
        .string()    
        .matches(/^[\u0600-\u06FF\s0-9a-zA-Z]+$/,'از کاکترهای خاص استفاده نشود'),
    email: Yup.lazy(value =>
        initialValues.auth_mode === 'email'
            ? Yup.string()
                .required('لطفا این قسمت را پر کنید')
                .email('قالب ایمیل صحیح نیست، لطفا مثل example@gmail.com وارد کنید')
            : Yup.string().nullable()
    ),
    mobile: Yup.lazy(value =>
        initialValues.auth_mode === 'mobile'
            ? Yup.string()
                .required('لطفا این قسمت را پر کنید')
                .matches(/^[0-9]{10,15}$/, 'شماره موبایل باید فقط شامل اعداد باشد و بین ۱۰ تا ۱۵ رقم باشد')
            : Yup.string().nullable()
    ),
    password:Yup
        .string()
        .required('لطفا این قسمت را پر کنید')
        .min(8,'حداقل ۸ کارکتر داشته باشد')
        // eslint-disable-next-line no-useless-escape
        .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,'حداقل یک حرف بزرگ و یک حرف کوچک لاتین و اعداد و کارکترهای خاص استفاده کنید'),
    confirm_password:Yup
        .string()
        .oneOf([Yup.ref('password'),''],'با رمز عبور مطابقت ندارد')    
        .required('لطفا این قسمت را پر کنید'),
    // image:Yup
    //     .mixed()
    //     .required('لطفا این قسمت را پر کنید')
    //     .test('filesize','حجم فایل نمیتواند بیشتر از ۱۰۰ کیلوبایت باشد',value=>value && value.size <= (100*1024))   
    image: Yup.mixed()
        .required('لطفا این قسمت را پر کنید')
        .test('fileSize', 'حجم فایل نمیتواند بیشتر از ۳۰۰ کیلوبایت باشد', value => {
            return value ? value.size <= 300 * 1024 : true;
        })
        .test('format','فرمت فایل باید jpg باشد', value => value && value.type === "image/jpeg")    

})

const authModevalues=[
    {id:'mobile',value:'موبایل'},
    {id:'email',value:'ایمیل'}
]

const Register = () => {
    return (
        <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}>
            {formik=>(
                <Form className='D-Full-Center'>
                    <h1>ثبت نام اعضا</h1>
                    {console.log(formik.touched.image)}
                    <FormikControl formik={formik} control="input" type="text" label="نام کاربری" name="user_name" />
                    <FormikControl formik={formik} control="input" type="text" label="نام" name="first_name" />
                    <FormikControl formik={formik} control="input" type="text" label="نام خانوادگی" name="last_name"/>
                    <FormikControl control="radio" type="radio" label="نوع اعتبار سنجی؟" name="auth_mode" options={authModevalues}/>
                    {formik.values.auth_mode==="email"&&<FormikControl formik={formik} control="input" type="text" label="ایمیل" name="email" />}
                    {formik.values.auth_mode==="mobile"&&<FormikControl formik={formik} control="input" type="text" label="شماره موبایل" name="mobile"/>}
                    <FormikControl formik={formik} control="input" type="password" label="پسورد" name="password"/>
                    <FormikControl formik={formik} control="input" type="password" label="تایید پسورد" name="confirm_password"/>
                    <FormikControl formik={formik} control="file" label="تصویر کاربر" name="image"/>
                    <button type='submit' className='btn btn-primary w-50'>ثبت نام</button>
                    <span>قبلا ثبت نام کرده ام</span>
                </Form>
            )}
        </Formik>
    );
}

export default Register;
