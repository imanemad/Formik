import React from 'react';
import TableCart from './TableCart';
import AddCart from './AddCart';

const Carts = () => {
    return (
        <div id="manage_cart_section" class="manage_cart_section main_section ">
        <h4 class="text-center my-3">مدیریت سبد خرید</h4>
        <div class="row justify-content-between">
            <div class="col-10 col-md-6 col-lg-4">
                <div class="input-group mb-3 dir-ltr">
                    <input type="text" class="form-control" placeholder="قسمتی از نام یا شماره سبد را وارد کنید"/>
                    <span class="input-group-text" >جستجو</span>
                </div>
            </div>
            <div class="col-2 col-md-6 col-lg-4 d-flex flex-column align-items-end">
                <AddCart/>
            </div>
        </div>
        <TableCart/>
    </div>
    );
}

export default Carts;
