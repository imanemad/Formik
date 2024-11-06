import React from 'react';
import { useNavigate } from 'react-router-dom';

const PrevButton = () => {
    const navigate=useNavigate()
    return (
        <button className='btn btn-dark mb-3' onClick={()=>navigate(-1)}>بازگشت</button>
    );
}

export default PrevButton;
