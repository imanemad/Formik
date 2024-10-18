import React from 'react';
import ToggleBtn from "../../components/ToggleBtn";
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from '../../redux/theme/themeSlice';

const Navbar = () => {
    const {mode}=useSelector(state=>state.darkmode)
    const dispatch=useDispatch()
    return (
        <nav className={"bg-white dark:bg-gray-500 h-navbar_height fixed top-0 left-0 w-full shadow-lg"}>
            <div className={"w-full p-1 h-full"}>
                <div className={"h-full flex items-center"}>
                <ToggleBtn 
                    title={mode} 
                    onChange={e => {
                        dispatch(setTheme(e.target.checked ? "dark" : "light"));
                    }}
                />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;