import { createNewCategoryService, editCategoryService } from "../../services/category/category";
import { Alert } from "../../utils/sweetAlert";
import * as Yup from 'yup'

export const initialValues={
    parent_id:'',
    title:'',
    descriptions:'',
    image:undefined,
    is_active:true,
    show_in_menu:true
}

export const onSubmit=async(values,actions,setForceRender,editId)=>{
    try {
        values={
            ...values,
            is_active:values.is_active?1:0,
            show_in_menu:values.show_in_menu?1:0,
        }
        if(editId){
            const res=await editCategoryService(editId,values)
            if(res.status===201 || res.status===200){
                Alert('ویرایش انجام شد',res.data.message,'success')
                setForceRender(last=>last+1)
            }
        }else{
            const res=await createNewCategoryService(values)
            console.log(res);
            if(res.status===201 || res.status===200){
                Alert('انجام شد',res.data.message,'success')
                actions.resetForm()
                // برای ایجاد یک تغییر که باعث شود در صفحه جدول مربوطه بروز رسانی انجام شود توسط useEffect
                setForceRender(last=>last+1)
            }
        }
    } catch (error) {
        
    }
}

export const validationSchema=Yup.object({
    parent_id:Yup.number(),
    title:Yup.string().required('اجباری').matches(/^[\u0600-\u06FF\sa-zA-Z0-9@!%$?&]+$/,'فقط از حروف و اعداد'),
    descriptions:Yup.string().matches(/^[\u0600-\u06FF\sa-zA-Z0-9@!%$?&]+$/,'فقط از حروف و اعداد'),
    image:Yup.mixed()
    .nullable() 
    .test(
        'filesize','حجم فایل نباید بیشتر از ۵۰۰ کیلوبایت باشد',
        (value)=>!value?true:(value.size <= 500 *1024)
    )
    .test(
        'format','فرمت فایل بایپ jpg باشد',
        (value)=>!value?true:(value.type==="image/jpeg")
    ),
    is_active:Yup.boolean(),
    show_in_menu:Yup.boolean()
})