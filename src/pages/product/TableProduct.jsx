import React from 'react';
import TablePages from '../../components/TablePages';
import AddProduct from './AddProduct';
import AddProductAtt from './AddProductAtt';

const TableProduct = () => {
    const data=[
        {
            id:1,
            category:"aaa",
            title:"bbb",
            price:"222",
            stock:"5",
            like_count:"2",
            status:"1"

        },
        {
            id:2,
            category:"ccc",
            title:"bbb",
            price:"555",
            stock:"3",
            like_count:"1",
            status:"3"

        },
        {
            id:3,
            category:"aaa",
            title:"ddd",
            price:"222",
            stock:"5",
            like_count:"2",
            status:"1"

        },
        {
            id:4,
            category:"ccc",
            title:"ddd",
            price:"555",
            stock:"3",
            like_count:"1",
            status:"3"

        }
    ]
    const dataInfo=[
        {feild:"id",title:"#"},
        {feild:"title",title:"عنوان محصول"},
        {feild:"price",title:"قیمت محصول"}
    ]
    const additionalElements=()=>{
        return(
            <>
                <i className="fas fa-edit text-warning mx-1 hoverable_text pointer has_tooltip" title="ویرایش محصول" data-bs-toggle="modal" data-bs-placement="top" data-bs-target="#add_product_modal"></i>
                <i className="fas fa-receipt text-info mx-1 hoverable_text pointer has_tooltip" title="ثبت ویژگی" data-bs-toggle="modal" data-bs-target="#add_product_attr_modal"></i>
                <i className="fas fa-plus text-success mx-1 hoverable_text pointer has_tooltip" title="افزودن ویژگی" data-bs-placement="top" data-bs-toggle="modal" data-bs-target="#add_product_attr_modal"></i>
                <i className="fas fa-times text-danger mx-1 hoverable_text pointer has_tooltip" title="حذف محصول" data-bs-toggle="tooltip" data-bs-placement="top"></i>
            </>
        )
    }
    
    const additionField=[{
        title:"عملیات",
        elements:()=>additionalElements()
    }]
    const searchParams={
        title:"جستجو",
        placeholder:"قسمتی از عنوان را وارد کنید",
        searcghField:"title"
    }
    return (
        <TablePages data={data} dataInfo={dataInfo} additionField={additionField} searchParams={searchParams} numOfPage={8}>
            <AddProduct/>
            <AddProductAtt/>
        </TablePages>
        // <table className="table table-responsive text-center table-hover table-bordered">
        //         <thead className="table-secondary">
        //             <tr>
        //                 <th>#</th>
        //                 <th>دسته</th>
        //                 <th>عنوان</th>
        //                 <th>قیمت</th>
        //                 <th>موجودی</th>
        //                 <th>تعداد لایک</th>
        //                 <th>وضعیت</th>
        //                 <th>عملیات</th>
        //             </tr>
        //         </thead>
        //         <tbody>
        //             <tr>
        //                 <td>1</td>
        //                 <td>دسته شماره فلان</td>
        //                 <td>محصول شماره 1</td>
        //                 <td>20,000 تومان</td>
        //                 <td>10</td>
        //                 <td>
        //                     <span className="text-success mx-2">30</span>
        //                     <span className="text-danger mx-2">10</span>
        //                 </td>
        //                 <td>فعال</td>
        //                 <td>
        //                     <i className="fas fa-edit text-warning mx-1 hoverable_text pointer has_tooltip" title="ویرایش محصول" data-bs-toggle="modal" data-bs-placement="top" data-bs-target="#add_product_modal"></i>
        //                     <i className="fas fa-receipt text-info mx-1 hoverable_text pointer has_tooltip" title="ثبت ویژگی" data-bs-toggle="modal" data-bs-target="#add_product_attr_modal"></i>
        //                     <i className="fas fa-times text-danger mx-1 hoverable_text pointer has_tooltip" title="حذف محصول" data-bs-toggle="tooltip" data-bs-placement="top"></i>
        //                 </td>
        //             </tr>
        //         </tbody>
        // </table>
    );
}

export default TableProduct;
