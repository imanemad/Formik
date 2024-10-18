import * as Yup from 'yup'

/* eslint-disable no-useless-escape */
export const educations =[
    {id:1 , value: 'ابتدایی'},
    {id:2 , value: 'سیکل'},
    {id:3 , value: 'دیپلم'},
    {id:4 , value: 'کارشناسی'}
]

export const skills =[
    {id:1 , value: 'HTML'},
    {id:2 , value: 'CSS'},
    {id:3 , value: 'SASS'},
    {id:4 , value: 'REACT'}
]

export const gender=[
    {id:1 , value: 'مرد'},
    {id:2 , value: 'زن'},
]

export const initialValues={
    name:'',
    email:'',
    password:'',
    address:{
        city:'',
        postalCode:''
    },
    bio:'',
    phone:['',''],
    education:'',
    gender:'',
    skill:[]
    // favorits:[''],
}

export const handleSubmit = (values,submitProps) => {
    setTimeout(() => {
        submitProps.setSubmitting(false)
        submitProps.resetForm();
    }, 5000);
};

export const validate=values=>{
    let errors={}
    if(!values.name){
        errors.name="لطفا این قسمت را پر کنید"
    }
    if(!values.email){
        errors.email="لطفا این قسمت را پر کنید"
    }else if (!/^\w+([.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.email)){
        errors.email="لطفا قالب ایمیل را رعایت فرمایید مثل exam.ple@gmail.com"
    }
    if(!values.password){
        errors.password="لطفا این قسمت را پر کنید"
    }
    return errors;
}

export const validationSchema=Yup.object({
    name:Yup
        .string()
        .required('لطفا این قسمت را پر کنید'),
    email:Yup
        .string()
        .required('لطفا این قسمت را پر کنید')
        .email('لطفا قالب ایمیل را رعایت فرمایید مثل exam.ple@gmail.com'),
    password:Yup
        .string()
        .required('لطفا این قسمت را پر کنید')
        .min(8,'حداقل ۸ کارکتر داشته باشد'),
    address:Yup.object({
        city:Yup
            .string()
            .required('لطفا این قسمت را پر کنید'),
        postalCode:Yup
            .string()
            .required('لطفا این قسمت را پر کنید'),}),
    phone:Yup.array().of(Yup
            .string()
            .required('لطفا این قسمت را پر کنید')),    
    // favorits:Yup.array().of(Yup
    //         .string()
    //         .required('لطفا این قسمت را پر کنید')),    
    bio:Yup
        .string()
        .required('لطفا این قسمت را پر کنید'),  
    education:Yup
        .string()
        .required('لطفا این قسمت را پر کنید'),      
})