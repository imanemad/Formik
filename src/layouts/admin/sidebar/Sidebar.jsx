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

                    <Item icon='fas fa-tachometer-alt' title='داشبورد'/>

                    <Title titr='فروشگاه'/>
                    <Item icon='fas fa-stream' title='مدیریت گروه محصول'/>
                    <Item icon='fas fa-cube' title='مدیریت محصول'/>
                    <Item icon='fas fa-copyright' title='مدیریت برند ها'/>
                    <Item icon='fab fa-pagelines' title='مدیریت گارانتی ها'/>
                    <Item icon='fas fa-palette' title='مدیریت رنگ ها'/>
                    <Item icon='fas fa-percentage' title='مدیریت تخفیف ها'/>

                    <Title titr='سفارشات و سبد'/>
                    <Item icon='fas fa-shopping-basket' title='مدیریت سبد ها'/>
                    <Item icon='fas fa-luggage-cart' title='مدیریت سفارشات'/>
                    <Item icon='fas fa-truck-loading' title='مدیریت نحوه ارسال'/>

                    <Title titr='کاربران و همکاران'/>
                    <Item icon='fas fa-users' title='مشاهده کاربران'/>
                    <Item icon='fas fa-user-tag' title='نقش ها'/>
                    <Item icon='fas fa-shield-alt' title='مجوز ها'/>

                    <Title titr='ارتباطات'/>
                    <Item icon='fas fa-question-circle' title='سوال ها'/>
                    <Item icon='fas fa-comment' title='نظرات'/>
                </div>
            </div>
        </section>
    );
}

export default Sidebar;
