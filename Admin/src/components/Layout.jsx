import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar/Sidebar';

const Layout = () => {
    return (
        <div className="app-content">
            <Sidebar />
            <div className="app-side-section">
                <Outlet />
            </div>
        </div>
    );
};

export default Layout;