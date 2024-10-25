import React from 'react';
import ModalsContainer from '../../components/ModalsContainer';

const AddCart = () => {
    return (
        <>
            <button class="btn btn-success d-flex justify-content-center align-items-center" data-bs-toggle="modal" data-bs-target="#edit_cart_modal">
                <i class="fas fa-plus text-light"></i>
            </button>  
            <ModalsContainer fullScreen={false} title="جزئیات سبد خرید" id="edit_cart_modal">
                <div class="modal-body">
                    <div class="container">
                        <div class="row my-3 justify-content-center">
                            <div class="col-12 col-md-4 col-lg-3 my-1">
                                <input type="text" class="form-control" list="customer_list" placeholder="نام مشتری"/>
                                {/* <datalist id="customer_list">
                                    <option value="مشتری شماره 1">
                                    <option value="مشتری شماره 2">
                                </datalist> */}
                            </div>
                            <div class="col-12 col-md-4 col-lg-2 my-1">
                                <input type="text" class="form-control" list="product_list" placeholder="عنوان محصول"/>
                                {/* <datalist id="product_list">
                                    <option value="محصول شماره 1">
                                    <option value="محصول شماره 2">
                                </datalist> */}
                            </div>
                            <div class="col-12 col-md-4 col-lg-2 my-1">
                                <select class="form-control">
                                    <option value="">انتخاب رنگ</option>
                                    <option value="1">رنگ شماره 1</option>
                                    <option value="2">رنگ شماره 2</option>
                                </select>                                
                            </div>
                            <div class="col-12 col-md-4 col-lg-2 my-1">
                                <select class="form-control">
                                    <option value="">انتخاب گارانتی</option>
                                    <option value="1">گارانتی شماره 1</option>
                                    <option value="2">گارانتی شماره 2</option>
                                </select>                                
                            </div>
                            <div class="col-12 col-md-4 col-lg-2 my-1">
                                <input type="number" class="form-control" placeholder="تعداد"/>
                            </div>
                            <div class="col-4 col-lg-1 d-flex justify-content-center align-items-center my-1">
                                <i class="fas fa-check text-light bg-success rounded-circle p-2 mx-1 hoverable_text hoverable pointer has_tooltip hoverable_text" title="ثبت ویژگی" data-bs-toggle="tooltip" data-bs-placement="top"></i>
                            </div>
                            <hr class="mt-3"/>
                        </div>
                        <div class="row justify-content-center">
                            <div class="col-12 col-md-6 col-lg-8">
                                <div class="input-group my-3 dir_ltr">
                                    <span class="input-group-text justify-content-center w_15" >عدد</span>
                                    <input type="number" class="form-control text-center w_15" placeholder=""  value="50"/>
                                    <span class="input-group-text text-end w_70 font_08 d-flex align-items-center text_truncate">
                                        <i class="fas fa-times text-danger hoverable_text pointer mx-1 has_tooltip" title="حذف محصول از سبد" data-bs-placement="top"></i>
                                        محصول شماره 1
                                        ( 100هزار تومان)
                                        ( گارانتی فلان)
                                        <i class="fas fa-circle mx-1" style={{color: "#000"}}></i>
                                    </span>
                                </div>
                            </div>
                            <div class="col-12 col-md-6 col-lg-8">
                                <div class="input-group my-3 dir_ltr" >
                                    <span class="input-group-text justify-content-center w_15" >عدد</span>
                                    <input type="number" class="form-control text-center w_15" placeholder=""  value="5"/>
                                    <span class="input-group-text text-end w_70 font_08 d-flex align-items-center text_truncate">
                                        <i class="fas fa-times text-danger hoverable_text pointer mx-1 has_tooltip" title="حذف محصول از سبد" data-bs-placement="top"></i>
                                        محصول ویژه و مورد خاص شماره 2
                                        ( 100هزار تومان)
                                        ( گارانتی فلان)
                                        <i class="fas fa-circle mx-1" style={{color: "rgb(236, 16, 16)"}}></i>
                                    </span>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="input-group my-3 dir_ltr">
                                    <span class="input-group-text justify-content-center w-75" >200,000 تومان</span>
                                    <span class="input-group-text w-25 text-center"> جمع کل </span>
                                </div>
                            </div>
                            <div class="btn_box text-center col-12 col-md-6 col-lg-8 mt-4">
                                <button class="btn btn-primary ">ذخیره</button>
                            </div>
                        </div>
                    </div>
                </div>
            </ModalsContainer>
        </>
    );
}

export default AddCart;
