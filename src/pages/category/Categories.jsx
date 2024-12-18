import React from 'react';
import TableCategory from './TableCategory';
import CategoryContextContainer from '../../context/categoryContext';

const Categories = () => {
    return (
        <CategoryContextContainer>
            <div id="manage_product_category" className="manage_product_category main_section">
                <h4 className="text-center my-3">مدیریت دسته بندی محصولات</h4>
                <TableCategory/>
            </div>
        </CategoryContextContainer>
    );
}

export default Categories;
