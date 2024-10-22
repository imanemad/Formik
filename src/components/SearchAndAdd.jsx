import React from 'react';

const SearchAndAdd = ({data_bs_target}) => {
    return (
        <div className="row justify-content-between">
            <div className="col-10 col-md-6 col-lg-4">
                <div className="input-group mb-3" style={{direction: "ltr"}}>
                    <input type="text" className="form-control" placeholder="قسمتی از عنوان را وارد کنید"/>
                    <span className="input-group-text" >جستجو</span>
                </div>
            </div>
            <div className="col-2 col-md-6 col-lg-4 d-flex flex-column align-items-end">
                <button className="btn btn-success d-flex justify-content-center align-items-center" data-bs-toggle="modal" data-bs-target={data_bs_target}>
                    <i className="fas fa-plus text-light"></i>
                </button>
            </div>
        </div>
    );
}

export default SearchAndAdd;
