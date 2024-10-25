import React from 'react';

const TableComments = () => {
    return (
        <>
            <table class="table table-responsive text-center table-hover table-bordered">
                <thead class="table-secondary">
                    <tr>
                        <th>#</th>
                        <th>نام و نام خانوادگی</th>
                        <th>نوع نظر</th>
                        <th>برای</th>
                        <th>قسمتی از متن</th>
                        <th>وضعیت</th>
                        <th>تاریخ</th>
                        <th>عملیات</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>قاسم بساکی</td>
                        <td>نظر</td>
                        <td>محصول فلان</td>
                        <td>قسمتی از متن نظر برای این محصول مثلا 100 کارکتر</td>
                        <td>
                            <div class="form-check form-switch d-flex justify-content-center align-items-center p-0 h-100">
                                <label class="form-check-label pointer" for="flexSwitchCheckDefault">فعال</label>
                                <input class="form-check-input pointer mx-3" type="checkbox" id="flexSwitchCheckDefault"/>
                            </div> 
                        </td>
                        <td>1400/10/12</td>
                        <td>
                            <i class="fas fa-times text-danger mx-1 hoverable_text pointer has_tooltip" title="حذف نظر" data-bs-toggle="tooltip" data-bs-placement="top"></i>
                        </td>
                    </tr>
                </tbody>
            </table>
            <nav aria-label="Page navigation example" class="d-flex justify-content-center">
                <ul class="pagination dir_ltr">
                    <li class="page-item">
                    <a class="page-link" href="test" aria-label="Previous">
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                    </li>
                    <li class="page-item"><a class="page-link" href="test">1</a></li>
                    <li class="page-item"><a class="page-link" href="test">2</a></li>
                    <li class="page-item"><a class="page-link" href="test">3</a></li>
                    <li class="page-item">
                    <a class="page-link" href="test" aria-label="Next">
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default TableComments;
