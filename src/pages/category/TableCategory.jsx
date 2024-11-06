import React, { useEffect, useState } from 'react';
import { deleteCategoryService, getCategoriesService } from '../../services/category/category';
import AddCategory from './AddCategory';
import TablePages from '../../components/TablePages';
import ShowInMenu from './tableAdditions/ShowInMenu';
import Actions from './tableAdditions/Actions';
import { Outlet, useParams } from 'react-router-dom';
import { convertDate } from '../../utils/convertDate';
import { Alert, ConfirmAlert } from '../../utils/sweetAlert';

const TableCategory = () => {
    const params=useParams()
    const [data,setData]=useState([])
    const [forceRender,setForceRender]=useState(0)
    const [loading,setLoading]=useState(false)
    
    const dataInfo=[
        {feild:"id",title:"#"},
        {feild:"title",title:"عنوان محصول"},
    ]

    const additionField=[
        {
            title:"تاریخ",
            elements:(rowData)=>convertDate(rowData.created_at)
        },
        {
            title:"نمایش در منو",
            elements:(rowData)=><ShowInMenu rowData={rowData}/>
        },
        {
            title:"عملیات",
            elements:(rowData)=><Actions rowData={rowData} handleDeleteCategory={handleDeleteCategory}/>
        }
    ]

    const searchParams={
        title:"جستجو",
        placeholder:"قسمتی از عنوان را وارد کنید",
        searcghField:"title"
    }

    const handleGetCategories=async ()=>{
        setLoading(true)
        try {
            const res = await getCategoriesService(params.Id)
            if(res.status===200){
                setData(res.data.data)
            }
        } catch (error) {
            console.log(error.message)
        }
        finally{
            setLoading(false)
        }
    }

    const handleDeleteCategory=async (rowData)=>{
        if(await ConfirmAlert("حذف گروه",`آیا از حذف ${rowData.title} اطمینان دارید؟`)){
            try {
                const res=await deleteCategoryService(rowData.id)
                if(res.status===200){
                    setData(data.filter(d=>d.id!==rowData.id))
                    Alert("",`${rowData.title} حذف گردید`,"success")
                }
            } catch (error) {
                console.log(error.message)
            }
        }
    }

    useEffect(()=>{
        handleGetCategories()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[params,forceRender])

    return (
        <>
            <Outlet/>
            <TablePages data={data} dataInfo={dataInfo} additionField={additionField} searchParams={searchParams} numOfPage={8} loading={loading}>
                <AddCategory setForceRender={setForceRender}/>
            </TablePages>
        </>
    );
}

export default TableCategory;
