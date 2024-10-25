import React from 'react';
import TableRoles from './TableRoles';
import AddRole from './AddRole';

const Roles = () => {
    return (
        <div id="manage_role_section" class="manage_role_section main_section">
        <h4 class="text-center my-3">مدیریت نقش ها</h4>
        <div class="row justify-content-between">
            <div class="col-10 col-md-6 col-lg-4">
                <div class="input-group mb-3 dir_ltr">
                    <input type="text" class="form-control" placeholder="قسمتی از نام نقش را وارد کنید"/>
                    <span class="input-group-text" >جستجو</span>
                </div>
            </div>
            <div class="col-2 col-md-6 col-lg-4 d-flex flex-column align-items-end">
                <AddRole/>
            </div>
        </div>
        <TableRoles/>
    </div>
    );
}

export default Roles;
