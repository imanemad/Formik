import React, { useContext, useEffect, useState } from 'react';
import ModalsContainer from '../../components/ModalsContainer';
import { Form, Formik } from 'formik';
import FormikControl from '../../components/form/FormikControl';
import { getCategoriesService, getCategoryService } from '../../services/category/category';
import { Alert } from '../../utils/sweetAlert';
import SubmitButton from '../../components/form/SubmitButton';
import { useParams } from 'react-router-dom';
import { CategoryContext } from '../../context/categoryContext';
import { initialValues, onSubmit, validationSchema } from './core';

const AddCategory = ({setForceRender}) => {
    const {editId,setEditId}=useContext(CategoryContext)
    const params=useParams()
    const [parents,setParents]=useState([])
    const [editCategory,setEditCategory]=useState(null)
    const [reInitialValues,setReInitialValues]=useState(null)

    const HandleGetParentsCategory=async ()=>{
        try {
            const res=await getCategoriesService()
            if(res.status===200){
                const allparents=res.data.data
                setParents(allparents.map(parent=>{
                    return {
                        id:parent.id,
                        value:parent.title
                    }
                }))
            }
        } catch (error) {
            Alert('مشکل !','متاسفانه دسته بندی والد دریافت نشد','warning')
        }
    }

    const handleGetCategory=async ()=>{
        try {
            const res=await getCategoryService(editId)
            if(res.status===200){
                const previousCategory=res.data.data
                setEditCategory(previousCategory)
            }
        } catch (error) {
            Alert('مشکل !','متاسفانه دسته مورد نظر دریافت نشد','warning')
        }
    }



    useEffect(()=>{
        HandleGetParentsCategory()
    },[])

    useEffect(()=>{
        if (editCategory) {
            setReInitialValues({
                parent_id:editCategory.parent_id || "",
                title:editCategory.title,
                descriptions:editCategory.descriptions || "",
                image:null,
                is_active:editCategory.is_active?true:false,
                show_in_menu:editCategory.show_in_menu?true:false
            })
        }
        else if(params.Id){
            setReInitialValues({
                ...initialValues,
                parent_id:params.Id
            })
        }else{
            setReInitialValues(null)
        }
    },[params.Id,editCategory])

    useEffect(()=>{
        if(editId!==null){
            handleGetCategory()
        }else{setEditCategory(null)}
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[editId])

    return (
        <>
            <button className="btn btn-success d-flex justify-content-center align-items-center" data-bs-toggle="modal" data-bs-target="#add_product_category_modal" onClick={()=>setEditId(null)}>
                <i className="fas fa-plus text-light"></i>
            </button>
            <ModalsContainer title={editId? editCategory?(`ویرایش : ${editCategory.title}`):"" : "افزودن دسته محصولات"} id="add_product_category_modal" fullScreen={true}>
                <Formik 
                initialValues={reInitialValues || initialValues} 
                validationSchema={validationSchema}
                enableReinitialize
                onSubmit={(values,actions)=>onSubmit(values,actions,setForceRender,editId)} 
                >
                    <Form>
                        
                        <div className="modal-body">
                            <div className="container">
                                <div className="row justify-content-center">
                                    
                                    {parents.length?(
                                        <FormikControl className='col-md-6 col-lg-8' control='select' options={parents} name='parent_id' label='دسته والد'/>
                                    ):null}
                                    <FormikControl className='col-md-6 col-lg-8' control='input' type='text' name='title' label='عنوان دسته' placeholder='عنوان دسته'/>
                                    <FormikControl className='col-md-6 col-lg-8' control='textarea' name='descriptions' label='توضیحات' placeholder='توضیحات'/>
                                    {
                                        editId?null:<FormikControl className='col-md-6 col-lg-8' control='file' name='image' label='تصویر' placeholder='تصویر'/>
                                    }
                                    <div className="col-12 col-md-6 col-lg-8">
                                        <FormikControl control='switch' name='is_active' label='وضعیت فعال' id="flexSwitchCheckDefault"/>
                                        <FormikControl control='switch' name='show_in_menu' label='نمایش در منو'/>
                                    </div>
                                    <div className="text-center mt-3">
                                        <SubmitButton/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Form>
                </Formik>
            </ModalsContainer>
        </>
    );
}

export default AddCategory;
