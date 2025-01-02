import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Static-element/Navbar';
import Footer from './Static-element/Footer';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;