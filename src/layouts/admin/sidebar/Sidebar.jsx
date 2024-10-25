import React, { useContext } from 'react';
import Item from './Item';
import { LayoutContext } from '../../../context/layoutContext';
import Profile from './Profile';
import Title from './Title';

const Sidebar = () => {
    const {menu}=useContext(LayoutContext)
    return (
        <section id="sidebar_section">
            <div className={`mini_sidebar collapsedd bg-dark h-100 ${menu?'expanded':''}`}>
                <div className="p-0 m-0">
                    <Profile/>

                    <Item targetPath='/dashboard' icon='fas fa-tachometer-alt' title='داشبورد'/>

                    <Title titr='فروشگاه'/>
                    <Item targetPath='/categories' icon='fas fa-stream' title='مدیریت گروه محصول'/>
                    <Item targetPath='/products' icon='fas fa-cube' title='مدیریت محصول'/>
                    <Item targetPath='/brands' icon='fas fa-copyright' title='مدیریت برند ها'/>
                    <Item targetPath='/guaranties' icon='fab fa-pagelines' title='مدیریت گارانتی ها'/>
                    <Item targetPath='/colors' icon='fas fa-palette' title='مدیریت رنگ ها'/>
                    <Item targetPath='/discounts' icon='fas fa-percentage' title='مدیریت تخفیف ها'/>

                    <Title titr='سفارشات و سبد'/>
                    <Item targetPath='/carts' icon='fas fa-shopping-basket' title='مدیریت سبد ها'/>
                    <Item targetPath='/orders' icon='fas fa-luggage-cart' title='مدیریت سفارشات'/>
                    <Item targetPath='/deliveries' icon='fas fa-truck-loading' title='مدیریت نحوه ارسال'/>

                    <Title titr='کاربران و همکاران'/>
                    <Item targetPath='/users' icon='fas fa-users' title='مشاهده کاربران'/>
                    <Item targetPath='/roles' icon='fas fa-user-tag' title='نقش ها'/>
                    <Item targetPath='/permissions' icon='fas fa-shield-alt' title='مجوز ها'/>

                    <Title titr='ارتباطات'/>
                    <Item targetPath='/questions' icon='fas fa-question-circle' title='سوال ها'/>
                    <Item targetPath='/comments' icon='fas fa-comment' title='نظرات'/>
                </div>
            </div>
        </section>
    );
}

export default Sidebar;
