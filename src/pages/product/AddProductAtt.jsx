import React from 'react';
import ModalsContainer from '../../components/ModalsContainer';

const AddProductAtt = () => {
    return (
        <ModalsContainer id="add_product_attr_modal" title="افزودن ویژگی به دسته محصول" fullScreen={true}>
            <div class="modal-body">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-12 col-md-6 col-lg-8">
                            <div class="input-group my-3 dir_ltr">
                                <span class="input-group-text w_6rem justify-content-center">عدد</span>
                                <input type="text" class="form-control" placeholder=""/>
                                <span class="input-group-text w_8rem justify-content-center">ویژگی اول</span>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 col-lg-8">
                            <div class="input-group my-3 dir_ltr">
                                <span class="input-group-text w_6rem justify-content-center">کیلو</span>
                                <input type="text" class="form-control" placeholder=""/>
                                <span class="input-group-text w_8rem justify-content-center">ویژگی دوم</span>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 col-lg-8">
                            <div class="input-group my-3 dir_ltr">
                                <span class="input-group-text w_6rem justify-content-center">مگاهرتز</span>
                                <input type="text" class="form-control" placeholder=""/>
                                <span class="input-group-text w_8rem justify-content-center">ویژگی سوم</span>
                            </div>
                        </div>
                        <div class="btn_box text-center col-12 col-md-6 col-lg-8 mt-4">
                            <button class="btn btn-primary ">ذخیره</button>
                        </div>
                    </div>
                </div>
            </div>
        </ModalsContainer>
    );
}

export default AddProductAtt;
