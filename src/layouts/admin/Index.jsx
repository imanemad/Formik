import React, { useContext } from 'react';
import Navbar from './navbar/Navbar';
import Sidebar from './sidebar/Sidebar';
import { LayoutContext } from '../../context/layoutContext';
import Dashboard from '../../pages/Dashboard/Dashboard';

const Index = () => {
    const {menu}=useContext(LayoutContext)
    return (
        <>
            <Navbar/>
            <Sidebar/>
            <section id="content_section" className={`bg-light py-2 px-3 ${menu?'with_sidebar':''}`}>
                <Dashboard/>
            </section>
        </>
    );
}

export default Index;
