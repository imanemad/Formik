import React from 'react';

const AttActions = ({rowData,select,setSelect}) => {
    return (
        <div className={`text-center ${select && select.id===rowData.id?"alert-danger":null}`}>
            <i className="fas fa-edit text-warning mx-1 hoverable_text pointer has_tooltip"
                title="ویرایش ویژگی" onClick={()=>setSelect(rowData)}></i>

            <i className="fas fa-times text-danger mx-1 hoverable_text pointer has_tooltip" title="حذف ویژگی" ></i>
        </div>
    );
}

export default AttActions;
