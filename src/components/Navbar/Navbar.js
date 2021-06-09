import React from 'react';
import logo from '../../images/logo.png'
import './Navbar.css';
const Navbar = () => {
    return (
        <div className="header">
            <img src={logo} alt="" />
            <nav>
                <img src={logo} alt="" />
                <a href="/shop">cart</a>
                <a href="/review">review</a>
                <a href="/manage">Manage</a>
            </nav>
        </div>
    );
};

export default Navbar;