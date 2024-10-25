import React from 'react';
import ModalsContainer from '../../components/ModalsContainer';

const AddGuarantee = () => {
    return (
        <>
            <button className="btn btn-success d-flex justify-content-center align-items-center" data-bs-toggle="modal" data-bs-target="#add_guarantee_modal">
                <i className="fas fa-plus text-light"></i>
            </button>
            <ModalsContainer id="add_guarantee_modal" fullScreen={false} title="افزودن گارانتی">
                <div class="modal-body">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-12">
                                <div class="input-group my-3 dir_ltr">
                                    <input type="text" class="form-control" placeholder=""/>
                                    <span class="input-group-text w_8rem justify-content-center">عنوان گارانتی</span>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="input-group my-3 dir_ltr">
                                    <input type="text" class="form-control" placeholder=""/>
                                    <span class="input-group-text w_8rem justify-content-center">توضیحات گارانتی</span>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="input-group my-3 dir_ltr">
                                    <input type="text" class="form-control" placeholder=" به ماه"/>
                                    <span class="input-group-text w_8rem justify-content-center">مدت گارانتی</span>
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

export default AddGuarantee;
