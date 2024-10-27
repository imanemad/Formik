import React, { useEffect } from 'react'; 
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import AuthFormikControl from '../../components/authForm/AuthFormikControl';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Alert } from '../../utils/sweetAlert';


const initialValues ={
    phone: "",
    password: "",
    remember:false
}

const onSubmit = (values,submitMethods,navigate)=>{
    localStorage.removeItem('loginToken');

    axios.post('https://ecomadminapi.azhadev.ir/api/auth/login',{
        ...values,
            remember:values.remember?1:0
    }).then(res=>{
        if(res.status===200){
            localStorage.setItem('loginToken',JSON.stringify(res.data))
            navigate('/')
            submitMethods.setSubmitting(false)
        }else{
            submitMethods.setSubmitting(false)
            Alert("توجه!!!",res.data.message,"error")
        }
    }).catch(error=>{
        Alert("توجه !!!","متاسفانه مشکلی در سمت سرور پیش آمده","error")
        submitMethods.setSubmitting(false)
    })
}

const validationSchema = Yup.object({
    phone:Yup.number().required('لطفا این قسمت را پر کنید'),
    password: Yup
        .string()
        .required('لطفا این قسمت را پر کنید')
        .matches(/^[a-zA-Z0-9@!%$?&]+$/ , 'فقط از حروف و اعداد استفاده کنید'),
    remember:Yup.boolean()
})

const Login = () => {
    const navigate=useNavigate()

    useEffect(() => {
        const loginToken = localStorage.getItem('loginToken');
        if (loginToken) {
            navigate('/'); // هدایت به صفحه اصلی اگر توکن موجود باشد
        }
    }, [navigate]);

    return (
        <Formik
        initialValues={initialValues}
        onSubmit={(values,submitMethods)=>onSubmit(values,submitMethods,navigate)}
        validationSchema={validationSchema}
        >
            {
                formik=>{
                    // console.log(formik);
                    return(   
                        <div className="wrap-login100">
                            <Form className="login100-form validate-form pos-relative d-flex flex-column align-items-center justify-content-center">
                                <span className="login100-form-title">ورود اعضا</span>
                                <AuthFormikControl formik={formik} control="input" type="text" name="phone" icon="fa fa-mobile" label="شماره موبایل"/>
                                <AuthFormikControl formik={formik} control="input" type="password" name="password" icon="fa fa-lock" label="عبور"/>
                                <AuthFormikControl formik={formik} control="checkbox" type="checkbox" name="remember" label="مرا بخاطر بسپار"/>
                                <div className="container-login100-form-btn">
                                    <button type="submit" className="login100-form-btn" disabled={formik.isSubmitting}>
                                        {formik.isSubmitting?"please waite...":"ورود"}
                                    </button>
                                </div>

                                {/* <div className="text-center p-t-12 p-b-45">
                                    <a className="txt2" href="#">
                                        فراموش کردید؟
                                    </a>
                                </div>
                                <div className="text-center pos-absolute m-auto w-100 bottom-0">
                                    <a className="txt2" href="#">
                                        ثبت نام
                                        <i className="fa fa-long-arrow-left m-l-5" aria-hidden="true"></i>
                                    </a>
                                </div> */}
                            </Form>
                            <div className="login100-pic js-tilt" data-tilt>
                                <img src="/auth/images/img-01.png" alt="IMG"/>
                            </div>
                        </div>
                    )
                }
            }
        </Formik>
    );
}

export default Login;