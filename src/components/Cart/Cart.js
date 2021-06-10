import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { cartContext } from '../../App';
import Navbar from '../Navbar/Navbar';
import RemoveItems from '../RemoveItems/RemoveItems';


const Cart = () => {
    const [cart, setCart] = useContext(cartContext)

    //function for formatting the numbers 
    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }

    let totalPrice = 0;
    let shippingCost = 0;

    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        totalPrice = totalPrice + product.price
    }

    if (totalPrice > 50) {
        shippingCost = 0;
    }
    else if (totalPrice > 20) {
        shippingCost = 9.59;
    }
    else if (totalPrice > 0) {
        shippingCost = 15
    }

    const tax = (totalPrice / 3).toFixed(2);
    const allTotal = (totalPrice + shippingCost + Number(tax)).toFixed(2);


    return (
        <div className="row px-5">
            <Navbar />
            <div className="col-sm-8 m-0">
            <h2 className="text-center">Total Items: {cart.length}</h2>
                {
                    cart.map(product => <RemoveItems key={product.id} product={product} />)
                }
            </div>
            <div className="col-sm-4">
                <h1>Your Order Summery</h1>
                <h5>Items Ordered: <b>{cart.length}</b> </h5>
                <h5>Products Price: $<b>{formatNumber(totalPrice)}</b></h5>
                <h5>Shipping Cost: ${shippingCost}</h5>
                <h5><small>Tax: $ <b>{tax}</b></small></h5>
                <h4 className="border-top border-secondary">Total Price: $<b>{allTotal}</b></h4>
                <br />
            
                {/* conditional rendering for the order button */}
                {
                    (cart.length > 0)
                    ?
                    <Link to="/confirmOrder" className="btn btn-primary" onClick={()=> setCart([])}>Place Order</Link> : 
                    <button className="btn btn-primary">No Items Available</button>
                }
            </div>
        </div>
    );
};

export default Cart;