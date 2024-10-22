import React from 'react';
import TableCategory from './TableCategory';
import AddCategory from './AddCategory';
import SearchAndAdd from '../../components/SearchAndAdd';

const Category = () => {
    return (
        <div id="manage_product_category" className="manage_product_category main_section">
            <h4 className="text-center my-3">مدیریت دسته بندی محصولات</h4>
            <SearchAndAdd data_bs_target="#add_product_category_modal"/>
            <TableCategory/>
            <AddCategory/>
        </div>
    );
}

export default Category;
