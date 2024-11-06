import React from 'react';
import { useLocation } from 'react-router-dom';
import PrevButton from '../../components/PrevButton';

const CategoryChildren = () => {
    const location=useLocation()
    return (
        <div className='d-flex justify-content-between'>

            <h5 className='text-center'>
                    <span>زیر گروه: </span>
                    <span className='text-info'>{location.state.parentData.title}</span>
            </h5>
            <PrevButton/>
        </div>
    );
}

export default CategoryChildren;
