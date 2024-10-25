import React from 'react';
import ModalsContainer from '../../components/ModalsContainer';

const DetailOrder = () => {
    return (
        <ModalsContainer fullScreen={true} id="order_details_modal" title="جزئیات سفارش"> 
            <div class="modal-body">
                <div class="container">
                    <div class="row my-1 justify-content-center">
                        <div class="col-12 col-md-4 col-lg-2 my-1">
                            <input type="text" class="form-control" value="قاسم بساکی" disabled/>
                        </div>
                        <div class="col-12 col-md-4 col-lg-2 my-1">
                            <input type="text" class="form-control" value="تاریخ پرداخت" disabled/>
                        </div>
                        <div class="col-12 col-md-4 col-lg-2 my-1">
                            <input type="text" class="form-control" value="مبلغ پرداختی" disabled/>
                        </div>
                        <div class="col-12 col-md-4 col-lg-2 my-1">
                            <input type="text" class="form-control" value="مبلغ تخفیف" disabled/>
                        </div>
                        <div class="col-12 col-md-4 col-lg-2 my-1">
                            <input type="text" class="form-control" value="کد تخفیف" disabled/>
                        </div>
                        <div class="col-12"></div>
                        <div class="col-12 col-md-10 my-1">
                            <input type="text" class="form-control" value="آدرس کامل" disabled/>
                        </div>
                        <div class="col-12"></div>
                        <div class="col-12 col-md-4 col-lg-2 my-1">
                            <input type="text" class="form-control" value="نوع ارسال" disabled/>
                        </div>
                        <div class="col-12 col-md-4 col-lg-2 my-1">
                            <input type="text" class="form-control" value="تلفن" disabled/>
                        </div>
                        <div class="col-12 col-md-4 col-lg-2 my-1">
                            <input type="text" class="form-control" value="ایمیل" disabled/>
                        </div>
                        <div class="col-12 col-md-4 col-lg-2 my-1">
                            <input type="text" class="form-control" value="شماره کارت" disabled/>
                        </div>
                        <div class="col-12 col-md-4 col-lg-2 my-1">
                            <input type="text" class="form-control" value="نام بانک" disabled/>
                        </div>

                        <hr class="mt-3"/>
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-12 col-md-6 col-lg-8">
                            <div class="input-group my-1 dir_ltr">
                                <span class="input-group-text justify-content-center w_15" >عدد</span>
                                <input type="number" class="form-control text-center w_15" placeholder=""  value="50" disabled/>
                                <span class="input-group-text text-end w_70 font_08 d-flex align-items-center text_truncate">
                                    محصول شماره 1
                                    ( 100هزار تومان)
                                    ( گارانتی فلان)
                                    <i class="fas fa-circle mx-1" style={{color: "#000"}}></i>
                                </span>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 col-lg-8">
                            <div class="input-group my-1 dir_ltr">
                                <span class="input-group-text justify-content-center w_15" >عدد</span>
                                <input type="number" class="form-control text-center w_15" placeholder=""  value="5" disabled/>
                                <span class="input-group-text text-end w_70 font_08 d-flex align-items-center text_truncate">
                                    محصول ویژه و مورد خاص شماره 2
                                    ( 100هزار تومان)
                                    ( گارانتی فلان)
                                    <i class="fas fa-circle mx-1" style={{color: "rgb(236, 16, 16)"}}></i>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </ModalsContainer>
    );
}

export default DetailOrder;
