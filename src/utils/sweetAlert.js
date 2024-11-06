import swal from "sweetalert";

export const Alert=(title,text,icon)=>{
    swal({
        title,
        text,
        icon,
        button: "متوجه شدم",
    });
}

export const ConfirmAlert=(title,text)=>{
    return swal({
        title,
        text,
        icon:"warning",
        buttons: ["خیر","بله"],
        dangerMode:true
    });
}