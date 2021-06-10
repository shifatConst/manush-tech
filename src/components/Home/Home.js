import React, { useContext } from 'react';
import { cartContext } from '../../App';
import Navbar from '../Navbar/Navbar';
import Products from '../Products/Products';

const Home = () => {    
    const [cart, setCart] = useContext(cartContext)

    //add to cart handler
    const handleAddProduct = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    }
    return (
        <div>
            <Navbar />
            <Products handleAddProduct={handleAddProduct} />
        </div>
    );
};

export default Home;