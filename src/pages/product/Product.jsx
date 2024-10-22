import React from 'react';
import SearchAndAdd from '../../components/SearchAndAdd';
import TableProduct from './TableProduct';
import AddProduct from './AddProduct';

const Product = () => {
    return (
        <div id="manage_product_section" className="manage_product_section main_section ">
            <h4 className="text-center my-3">مدیریت محصولات</h4>
            <SearchAndAdd data_bs_target='#add_product_modal'/>
            <TableProduct/>
            <AddProduct/>
        </div>
    );
}

export default Product;
