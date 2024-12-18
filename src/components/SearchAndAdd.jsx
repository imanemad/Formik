import React from 'react';
import AddProduct from '../pages/product/AddProduct';

const SearchAndAdd = () => {
    return (
        <div className="row justify-content-between">
            <div className="col-10 col-md-6 col-lg-4">
                <div className="input-group mb-3" style={{direction: "ltr"}}>
                    <input type="text" className="form-control" placeholder="قسمتی از عنوان را وارد کنید"/>
                    <span className="input-group-text" >جستجو</span>
                </div>
            </div>
            <div className="col-2 col-md-6 col-lg-4 d-flex flex-column align-items-end">
                <AddProduct/>
            </div>
        </div>
    );
}

export default SearchAndAdd;
