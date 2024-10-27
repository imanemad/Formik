import React from 'react';
import Navbar from './navbar/Navbar';
import Sidebar from './sidebar/Sidebar';
import Content from './content/Content';
import { Navigate } from 'react-router-dom';
import { useIsLogin } from '../../hook/authHook';


const Index = () => {
    const [loading,isLogin]=useIsLogin()
    
    return (
        <>
        {
            loading ? (
                <h1>Loading...</h1>
                
            ): isLogin ? (
                <>
                    <Sidebar/>
                    <Navbar/>
                    <Content/>
                </>
            ):(
                <Navigate to={'/auth/login'}/>
            )
        }
   
        </>
    );
}

export default Index;
