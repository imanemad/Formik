import React from 'react';
import TableOrders from './TableOrders';
import AddOrder from './AddOrder';
import DetailOrder from './DetailOrder';

const Orders = () => {
    return (
        <div id="manage_orders_section" className="manage_orders_section main_section">
            <h4 className="text-center my-3">مدیریت سفارشات</h4>
            <div className="row justify-content-between">
                <div className="col-10 col-md-6 col-lg-4">
                    <div className="input-group mb-3 dir_ltr">
                        <input type="text" className="form-control" placeholder="قسمتی از نام کاربر یا شماره سفارش را وارد کنید"/>
                        <span className="input-group-text" >جستجو</span>
                    </div>
                </div>
                <div className="col-2 col-md-6 col-lg-4 d-flex flex-column align-items-end">
                    <AddOrder/>
                    <DetailOrder/>
                </div>
            </div>
            <TableOrders/>
        </div>
    );
}

export default Orders;
