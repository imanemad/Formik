import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';

const Logout = () => {
    const [loading,setLoading]=useState(true)

    useEffect(()=>{
        // const loginToken=JSON.parse(localStorage.getItem('loginToken'))
        // if(loading && loginToken.token){
        //     axios.get('https://ecomadminapi.azhadev.ir/api/auth/logout',{
        //         headers:{
        //             Authorization:`bearer ${loginToken.token}`,
        //         },
        //     })
        //     .then(res=>{
        //         console.log("Logout successful", res);
        //         localStorage.removeItem("loginToken")
        //         setLoading(false)
        //     })
        //     .catch(error=>{
        //         console.error("Error during logout:", error);
        //         setLoading(false)
        //     });
        // }else{
        //     setLoading(false)
        // }
        localStorage.removeItem("loginToken")
        setLoading(false)

    },[loading])

    return (
        <>
            {loading?(
                <h1>Loading...</h1>
            ):(
                <Navigate to="/auth/login"/>
            )}
        </>
    );
}

export default Logout;
