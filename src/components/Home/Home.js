import React, { useContext, useState } from 'react';
import { cartContext } from '../../App';
// import Cart from '../Cart/Cart';
import Navbar from '../Navbar/Navbar';
import Products from '../Products/Products';

const Home = () => {
    // const [cart, setCart] = useState([]);
    const [cart, setCart] = useContext(cartContext)
    const handleAddProduct = (product) => {
        // console.log("items added", product);
        const newCart = [...cart, product];
        setCart(newCart);
    }
    return (
        <div>
            <Navbar cart={cart} />
            <Products handleAddProduct={handleAddProduct} />
            {/* <Cart cart={kart}/> */}
        </div>
    );
};

export default Home;