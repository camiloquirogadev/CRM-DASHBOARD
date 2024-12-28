import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import '../styles/Layout.css';

const Layout = ({ children }) => (
    <div className="layout">
        <Sidebar />
        <div className="content">
            <Header />
            {children}
        </div>
    </div>
);

export default Layout;