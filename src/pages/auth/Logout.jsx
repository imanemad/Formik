// import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { logoutService } from '../../services/auth/auth';
import { Alert } from '../../utils/sweetAlert';

const Logout = () => {
    const [loading,setLoading]=useState(true)

    const handleLogout= async ()=>{
        try {
            const res = await logoutService()
            if (res.status===200){
                localStorage.removeItem('loginToken')
            }else{
                Alert("متاسفم",res.data.message,"error")
            }
            setLoading(false)
        } catch (error) {
            setLoading(false)
            Alert("متاسفم","مشکلی در سمت سرور است","error")
        }
    }

    useEffect(()=>{
        handleLogout()
    },[])

    return (
        <>
            {loading?(
                <h1>لطفا صبر کنید . . .</h1>
            ):(
                <Navigate to="/auth/login"/>
            )}
        </>
    );
}

export default Logout;
