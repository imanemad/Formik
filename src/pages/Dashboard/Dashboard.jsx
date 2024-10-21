import React, { useEffect } from 'react';
import { handlerChart } from './chart';
import CardDashboard from './CardDashboard';
import ProductTable from './ProductTable';

const Dashboard = () => {

    useEffect(()=>{
        const labels = ['فروردین' , 'اردیبهشت', 'خرداد' , 'تیر' , 'مرداد' , 'شهریور' , 'مهر' , 'آبان' , 'آذر' , 'دی' , 'بهمن' , 'اسفند'];
        const datapoints = [0, 20, 20, 60, 60, 120, 180, 120, 125, 105, 110, 170];
        handlerChart(labels,datapoints)
    },[])

    return (
        <div id="dashboard_section" className="dashboard_section main_section">

        <section className="row">
            <CardDashboard currentValue='7' titr='سبد خرید امروز' description="سبدهای خرید مانده امروز" icon="fas fa-shopping-basket" weekCount="13" monthCount="18"/>
            <CardDashboard currentValue='10' titr='سفارشات مانده امروز' description="سفارشات معلق و فاقد پرداختی" icon="fas fa-dolly" weekCount="9" monthCount="16"/>
            <CardDashboard currentValue='20' titr='سفارشات امروز' description="سفارشات کامل و دارای پرداختی" icon="fas fa-luggage-cart" weekCount="263" monthCount="1038"/>
            <CardDashboard currentValue='1.500.000' titr='درآمد امروز' description="جمع مبالغ پرداختی (تومان)" icon="fas fa-money-check-alt" weekCount="6,380,000" monthCount="22,480,000"/>
        </section>


        <section className="row">
            <ProductTable/>
            <div className="col-12 col-lg-6">
                <canvas id="myChart" height="195"></canvas>
            </div>
        </section>
    </div>
    );
}

export default Dashboard;
