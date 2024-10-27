import React, { useContext } from 'react';
import { LayoutContext } from '../../../context/layoutContext';
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../../../pages/Dashboard/Dashboard';
import Categories from '../../../pages/category/Categories';
import Products from '../../../pages/product/Products';
import Colors from '../../../pages/colors/Colors';
import Guaranties from '../../../pages/guarantee/Guaranties';
import Brands from '../../../pages/brands/Brands';
import Discounts from '../../../pages/discount/Discounts';
import Carts from '../../../pages/cart/Carts';
import Orders from '../../../pages/orders/Orders';
import Deliveries from '../../../pages/delivery/Deliveries';
import Users from '../../../pages/users/Users';
import Roles from '../../../pages/roles/Roles';
import Permissions from '../../../pages/permissions/Permissions';
import Comments from '../../../pages/comments/Comments';
import Questions from '../../../pages/questions/Questions';
import Logout from '../../../pages/auth/Logout';

const Content = () => {
    const {menu}=useContext(LayoutContext)
    return (
        <section id="content_section" className={`bg-light py-2 px-3 ${menu?'with_sidebar':''}`}>
            <Routes>
                <Route path='/' element={<Dashboard/>}/>
                <Route path='/categories' element={<Categories/>}/>
                <Route path='/products' element={<Products/>}/>
                <Route path='/guaranties' element={<Guaranties/>}/>
                <Route path='/colors' element={<Colors/>}/>
                <Route path='/brands' element={<Brands/>}/>
                <Route path='/discounts' element={<Discounts/>}/>
                <Route path='/carts' element={<Carts/>}/>
                <Route path='/orders' element={<Orders/>}/>
                <Route path='/deliveries' element={<Deliveries/>}/>
                <Route path='/users' element={<Users/>}/>
                <Route path='/roles' element={<Roles/>}/>
                <Route path='/permissions' element={<Permissions/>}/>
                <Route path='/comments' element={<Comments/>}/>
                <Route path='/questions' element={<Questions/>}/>
                <Route path='/logout' element={<Logout/>}/>

                <Route path='*' element={<Dashboard/>}/>
            </Routes>
        </section>
    );
}

export default Content;
