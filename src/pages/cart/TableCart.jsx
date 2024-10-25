import React from 'react';

const TableCart = () => {
    return (
        <>
            <table class="table table-responsive text-center table-hover table-bordered">
                <thead class="table-secondary">
                    <tr>
                        <th>#</th>
                        <th>آی دی مشتری</th>
                        <th>نام مشتری</th>
                        <th>تاریخ</th>
                        <th>مبلغ کل سبد</th>
                        <th>وضعیت</th>
                        <th>عملیات</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>50</td>
                        <td>قاسم بساکی</td>
                        <td>1400/07/15</td>
                        <td>100هزار تومان</td>
                        <td>فعال</td>
                        <td>
                            <i class="fas fa-edit text-warning mx-1 hoverable_text pointer has_tooltip" title="ویرایش و جزئیات سبد" data-bs-toggle="modal" data-bs-placement="top" data-bs-target="#edit_cart_modal"></i>
                            <i class="fas fa-times text-danger mx-1 hoverable_text pointer has_tooltip" title="حذف سبد" data-bs-toggle="tooltip" data-bs-placement="top"></i>
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

export default TableCart;
