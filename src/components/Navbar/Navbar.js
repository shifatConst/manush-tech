import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png'
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Navbar = (props) => {
    return (
        <div className="header">
            {/* <img src={logo} alt="" /> */}
            <nav className="navbar justify-content-between navbar-light bg-light mx-5">
                <Link className="navbar-brand" to="/"><img src={logo} alt="" /></Link>
                <ul className="nav nav-tabs justify-content-center">
                    <li className="nav-item">
                        <Link className="nav-link" to="/home">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/cart"> <FontAwesomeIcon icon={faShoppingCart} /> {props.cart.length}</Link>
                    </li>
                </ul>
                {/* <img src={logo} alt="" />
                <Link to="/cart">Cart {props.cart.length}</Link>
                <a href="/home">Home</a>
                <a href="/manage">Manage</a> */}
                {/* <nav className="sticky-top nav-style bg-white">
                    <ul className="nav nav-tabs justify-content-center">
                        <li className="nav-item">
                            <Link className="nav-link" to="/home">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/cart"> <FontAwesomeIcon icon={faShoppingCart} /> {props.cart.length}</Link>
                        </li>
                    </ul>
                </nav> */}

            </nav>
        </div>
    );
};

export default Navbar;