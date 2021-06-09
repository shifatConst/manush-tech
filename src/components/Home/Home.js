import React from 'react';
import Cart from '../Cart/Cart';
import Navbar from '../Navbar/Navbar';
import Products from '../Products/Products';

const Home = () => {
    const handleAddProduct = (product) => {
        console.log("items added", product);
    }
    return (
        <div>
            <Navbar />
            <Products handleAddProduct={handleAddProduct} />
            <Cart />
        </div>
    );
};

export default Home;