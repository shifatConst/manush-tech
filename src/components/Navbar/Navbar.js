import React from 'react';
import logo from '../../images/logo.png'
import './Navbar.css';
const Navbar = (props) => {
    return (
        <div className="header">
            <img src={logo} alt="" />
            <nav>
                <img src={logo} alt="" />
                <a href="/shop">cart {props.cart.length}</a>
                <a href="/review">review</a>
                <a href="/manage">Manage</a>
            </nav>
        </div>
    );
};

export default Navbar;