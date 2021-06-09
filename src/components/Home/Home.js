import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import Navbar from '../Navbar/Navbar';
import Products from '../Products/Products';

const Home = () => {
    const [cart, setCart] = useState([]);
    const handleAddProduct = (product) => {
        // console.log("items added", product);
        const newCart = [...cart, product];
        setCart(newCart);
    }
    return (
        <div>
            <Navbar cart={cart} />
            <Products handleAddProduct={handleAddProduct} />
            <Cart cart={cart}/>
        </div>
    );
};

export default Home;