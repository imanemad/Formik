import React, { useContext } from 'react';
import { LayoutContext } from '../../../context/layoutContext';

const RightContent = () => {
    const {setMenu}=useContext(LayoutContext)
    return (
        <div className="right_content h-100 py-1 bg-dark">
            <a className="navbar-brand h-100" href="/">
                <img src="images/logo.png" className="h-100" alt=''/>
            </a>
            <div className="form-check form-switch mx-4 d-none d-md-block">
                <input id="handle_toggle_sidemenu" className="form-check-input pointer" type="checkbox" onChange={(e)=>setMenu(e.target.checked)}/>
            </div>
        </div>
    );
}

export default RightContent;
