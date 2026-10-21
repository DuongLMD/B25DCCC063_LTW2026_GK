import React from 'react';
import {Outlet} from 'react-router-dom';

function Layout() {
    return (
        <div>
            <Navbar />
            <div className="content">
                <Outlet />
            </div>
        </div>
    );
}