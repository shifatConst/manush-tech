import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png'
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { cartContext } from '../../App';

const Navbar = () => {
    const [cart] = useContext(cartContext)

    return (
        <div className="header">
            <nav className="navbar justify-content-between navbar-light bg-light mx-4">
                <Link className="navbar-brand" to="/"><img src={logo} alt="" /></Link>
                <ul className="nav nav-tabs justify-content-center">
                    <li className="nav-item">
                        <Link className="nav-link" to="/home">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/cart"> <FontAwesomeIcon icon={faShoppingCart} /> {cart.length}</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;