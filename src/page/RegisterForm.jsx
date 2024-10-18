import { Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { educations, gender, handleSubmit, initialValues , skills, validationSchema } from '../formValidation/registerForm';
import FormikControl from '../formikElements/FormikControl';
// import FormFavorits from '../components/FormFavorits';



const RegisterForm = () => {
    const [saveData,setSaveData]=useState(null)
    const [myValues,setMyValues]=useState(null)
    
    const handleSetData=(formik)=>{
        localStorage.setItem('formRegister',JSON.stringify(formik.values))
    }

    const handleGetData=()=>{
        setMyValues(saveData)
    }

    useEffect(()=>{
        const localSaveData=JSON.parse(localStorage.getItem('formRegister'));
        setSaveData(localSaveData)
    },[])

    return (
        <Formik 
            initialValues={myValues || initialValues} 
            onSubmit={handleSubmit} 
            validationSchema={validationSchema}
            validateOnMount 
            enableReinitialize
        >
            {formik => (
                <>
                    <Form className="GridCenter">
                        <div className="w-50 d-flex flex-column align-items-start mt-5">
                            <FormikControl control="input" type="text" label="نام" name="name"/>
                            <FormikControl control="input" type="text" label="ایمیل" name="email"/>
                            <FormikControl control="input" type="password" label="پسورد" name="password"/>
                            <FormikControl control="textarea" label="بیوگرافی" name="bio"/>

                            <FormikControl control="input" type="text" label="نام شهر" name="address.city"/>
                            <FormikControl control="input" type="text" label="کد پستی" name="address.postalCode"/>

                            <FormikControl control="input" type="text" label="موبایل" name="phone[0]"/>
                            <FormikControl control="input" type="text" label="تلفن" name="phone[1]"/>

                            <FormikControl control="select" type="select" label="تحصیلات" name="education" options={educations}/>
                            <FormikControl control="radio" type="radio" label="جنسیت" name="gender" options={gender}/>
                            <FormikControl control="checkbox" type="checkbox" label="حرفه" name="skill" options={skills}/>

                            {/* <div className='w-100'>
                                <FieldArray name='favorits'>
                                    {props => <FormFavorits {...props}/>}
                                </FieldArray>
                            </div> */}
                            {
                                
                                <button type="submit" className="btn btn-primary mt-4" disabled={!formik.isValid || formik.isSubmitting}>
                                    {formik.isSubmitting ? "منتظر..." : "ثبت نام"}
                                </button>
                            }
                            {
                                (formik.dirty && formik.isValid) && <button type='button' className='btn btn-success mt-3' onClick={()=>handleSetData(formik)}>ذخیره اطلاعات</button>
                            }
                            {
                                saveData && <button type='button' className='btn btn-primary mt-3' onClick={handleGetData}>دریافت آخرین اطلاعات</button>
                            }
                            {
                                formik.dirty && <button type='reset' className='btn btn-danger mt-3' onClick={handleGetData}>پاکسازی</button>
                            }
                            
                        </div>
                    </Form>
                </>
            )}
        </Formik>
    );
}

export default RegisterForm;
