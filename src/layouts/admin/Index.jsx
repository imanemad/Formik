import React from 'react';
import Navbar from './navbar/Navbar';
import Sidebar from './sidebar/Sidebar';
import Content from './content/Content';


const Index = () => {
    
    return (
        <>
            <Sidebar/>
            <Navbar/>
            <Content/>
        </>
    );
}

export default Index;
