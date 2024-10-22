import React, { useContext } from 'react';
import Navbar from './navbar/Navbar';
import Sidebar from './sidebar/Sidebar';
import { LayoutContext } from '../../context/layoutContext';
// import Dashboard from '../../pages/Dashboard/Dashboard';
// import Category from '../../pages/category/Category';
import Product from '../../pages/product/Product';

const Index = () => {
    const {menu}=useContext(LayoutContext)
    return (
        <>
            <Sidebar/>
            <Navbar/>
            <section id="content_section" className={`bg-light py-2 px-3 ${menu?'with_sidebar':''}`}>
                {/* <Dashboard/> */}
                {/* <Category/> */}
                <Product/>
            </section>
        </>
    );
}

export default Index;
