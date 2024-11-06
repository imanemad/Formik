import React from 'react';

const Loading = ({d_inline}) => {
    return (
        <div className={`text-center ${d_inline && "d-inline me-5 pe-3"}`}>
            <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
        </div>
    );
}

export default Loading;
