import React from 'react';
import ModalsContainer from '../../components/ModalsContainer';

const AddCategoryAtt = () => {
    return (
        <ModalsContainer id="add_product_category_attr_modal" title="افزودن ویژگی به دسته بندی" fullScreen={true}>
            <div class="modal-body">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="row my-3">
                            <div class="col-12 col-md-6 col-lg-4 my-1">
                                <input type="text" class="form-control" placeholder="عنوان ویژگی جدید"/>
                            </div>
                            <div class="col-12 col-md-6 col-lg-4 my-1">
                                <input type="text" class="form-control" placeholder="واحد ویژگی جدید"/>
                            </div>
                            <div class="col-8 col-lg-2 my-1">
                                <div class="form-check form-switch d-flex justify-content-center align-items-center p-0 h-100">
                                    <label class="form-check-label pointer" for="flexSwitchCheckDefault">نمایش در فیلتر</label>
                                    <input class="form-check-input pointer mx-3" type="checkbox" id="flexSwitchCheckDefault" checked/>
                                </div>                            
                            </div>
                            <div class="col-4 col-lg-2 d-flex justify-content-center align-items-center my-1">
                                <i class="fas fa-check text-light bg-success rounded-circle p-2 mx-1 hoverable_text hoverable pointer has_tooltip hoverable_text" title="ثبت ویژگی" data-bs-toggle="tooltip" data-bs-placement="top"></i>
                            </div>
                        </div>
                        <hr/>
                        <div class="row justify-content-between">
                            <div class="col-10 col-md-6 col-lg-4">
                                <div class="input-group mb-3 dir_ltr">
                                    <input type="text" class="form-control" placeholder="قسمتی از عنوان را وارد کنید"/>
                                    <span class="input-group-text" >جستجو</span>
                                </div>
                            </div>
                        </div>
                        <table class="table table-responsive text-center table-hover table-bordered">
                            <thead class="table-secondary">
                                <tr>
                                    <th>#</th>
                                    <th>عنوان</th>
                                    <th>واحد</th>
                                    <th>نمایش در فیلتر</th>
                                    <th>عملیات</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>ویژگی شماره 1</td>
                                    <td>عدد</td>
                                    <td>
                                        <div class="form-check form-switch d-flex justify-content-center">
                                            <input class="form-check-input pointer" type="checkbox" id="flexSwitchCheckDefault" checked/>
                                        </div>
                                    </td>
                                    <td>
                                        <i class="fas fa-edit text-warning mx-1 hoverable_text pointer has_tooltip" title="ویرایش دسته" data-bs-toggle="tooltip" data-bs-placement="top"></i>
                                        <i class="fas fa-times text-danger mx-1 hoverable_text pointer has_tooltip" title="حذف دسته" data-bs-toggle="tooltip" data-bs-placement="top"></i>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
      
        </ModalsContainer>
    );
}

export default AddCategoryAtt;
