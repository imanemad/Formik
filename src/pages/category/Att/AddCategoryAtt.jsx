import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import TablePages from '../../../components/TablePages';
import ShowInFilter from './ShowInFilter';
import AttActions from './AttActions';
import PrevButton from '../../../components/PrevButton';
import { createCategoryAttsService, editCategoryAttService, getCategoryAttsService } from '../../../services/category/categoryAtt';
import { Form, Formik } from 'formik';
import * as Yup from 'yup'
import FormikControl from '../../../components/form/FormikControl';
import SubmitButton from '../../../components/form/SubmitButton';
import { Alert } from '../../../utils/sweetAlert';

const initialValues={
    title:'',
    unit:'',
    in_filter:true
}

const onSubmit=async (values,actions,id,setData,select,setSelect)=>{
    try {
        values={
            ...values,
            in_filter:values.in_filter?1:0
        }
        if (select) {
            const res=await editCategoryAttService(select.id,values)
            console.log(res);
            if(res.status===200){
                setData(oldData=>{
                    const newData=[...oldData]
                    const index=newData.findIndex(d=>d.id===select.id)
                    newData[index]=res.data.data
                    return newData
                })
                Alert("",res.data.message,"success")
                actions.resetForm();
                setSelect(null)
            }
        }else{
            const res=await createCategoryAttsService(id,values)
            if(res.status===201){
                Alert("",res.data.message,"success")
                setData(oldData=>[...oldData,res.data.data])
                actions.resetForm();
            }
        }
    } catch (error) {
        console.log(error.message);
    }
}

const validationSchema=Yup.object({
    title:Yup.string().required('اجباری').matches(/^[\u0600-\u06FF\sa-zA-Z0-9@!%$?&]+$/,'فقط از حروف و اعداد'),
    unit:Yup.string().required('اجباری').matches(/^[\u0600-\u06FF\sa-zA-Z0-9@!%$?&]+$/,'فقط از حروف و اعداد'),
    in_filter:Yup.boolean(),
})

const AddCategoryAtt = () => {
    const location=useLocation()
    const category=location.state.categoryData
    // Edit
    const [select,setSelect]=useState(null)
    const [reInitialValues,setReInitialValues]=useState(null)
    // Table
    const [data,setData]=useState([])
    const [loading,setLoading]=useState(false)

    const dataInfo=[
        {feild:"id",title:"#"},
        {feild:"title",title:"عنوان محصول"},
        {feild:"unit",title:"واحد"},
    ]

    const additionField=[
        {
            title:"نمایش در فیلتر",
            elements:(rowData)=><ShowInFilter rowData={rowData}/>
        },
        {
            title:"عملیات",
            elements:(rowData)=><AttActions rowData={rowData} select={select} setSelect={setSelect}/>
        }
    ]

    const searchParams={
        title:"جستجو",
        placeholder:"قسمتی از عنوان را وارد کنید",
        searcghField:"title"
    }

    const handleGetAtt=async ()=>{
        setLoading(true)
        try {
            const res =await getCategoryAttsService(category.id)
            if(res.status===201||res.status===200){
                setData(res.data.data)
            }
        } catch (error) {
            console.log(error.message);
            
        }
        finally{
            setLoading(false)
        }
    }

    useEffect(()=>{
        handleGetAtt()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    useEffect(()=>{
        if(select){
            setReInitialValues({
                title:select.title,
                unit:select.unit,
                in_filter:select.in_filter?true:false
            })
        }else{
            setReInitialValues(null)
        }
    },[select])

    return (
        <>
            <h4 className='text-center my-3'>
                <span>مدیریت ویژگی های </span>  
                <span className='text-success'>{category.title}</span>
            </h4>
                <div className="container">
                    <div className="row ">

                        <Formik initialValues={reInitialValues ||initialValues} 
                                onSubmit={(values,actions)=>onSubmit(values,actions,category.id,setData,select,setSelect)} 
                                validationSchema={validationSchema}
                                enableReinitialize>
                            <Form>
                                <div className={`row my-3 pt-3 ${select?"alert-danger":null}`}>
                                    <FormikControl control='input' 
                                                    type='input' 
                                                    name='title' placeholder='عنوان ویژگی جدید' 
                                                    className="col-12 col-md-6 col-lg-4 my-1"
                                                    label="عنوان"/>
                                    <FormikControl control='input' 
                                                    type='input' 
                                                    name='unit' placeholder='واحد ویژگی جدید' 
                                                    className="col-12 col-md-6 col-lg-4 my-1"
                                                    label="واحد"/>
                                    <div className="col-8 col-lg-2 pt-2">
                                        <FormikControl control='switch' name='in_filter' label='نمایش در منو'/>
                                    </div>
                                    <div className="col-4 col-lg-2 d-flex justify-content-center align-items-center pb-4">
                                        <SubmitButton/>
                                        {
                                            select?(
                                                <button className='btn btn-secondary me-2' onClick={()=>setSelect(null)}>انصراف</button>
                                            ):null
                                        }
                                    </div>
                                </div>
                            </Form>
                        </Formik>

                        <hr/>
                        <TablePages data={data} dataInfo={dataInfo} additionField={additionField} searchParams={searchParams} numOfPage={3} loading={loading}>
                            <PrevButton/>
                        </TablePages>
                    </div>
                </div>
        </>    
    );
}

export default AddCategoryAtt;
