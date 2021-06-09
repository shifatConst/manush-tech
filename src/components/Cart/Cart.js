import React, { useContext, useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import { cartContext } from '../../App';

const Cart = () => {
    const [cart, setCart] = useContext(cartContext)
    const {price, title, image} = cart;

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

    if (totalPrice > 35) {
        shippingCost = 0;
    }
    else if (totalPrice > 15) {
        shippingCost = 4.99;
    }
    else if (totalPrice > 0) {
        shippingCost = 12.99
    }

    const tax = (totalPrice / 3).toFixed(2);
    const grandTotal = (totalPrice + shippingCost + Number(tax)).toFixed(2);


    return (
        <div className="row">
            <div className="col-sm-8">
                <h1>Your product: {cart.length}</h1>
            </div>
            <div className="col-sm-4">
                <h1>Your Order Summery</h1>
                <h5>Items Ordered: <b>{cart.length}</b> </h5>
                <h5>Products Price: $<b>{formatNumber(totalPrice)}</b></h5>
                <h5>Shipping Cost: ${shippingCost}</h5>
                <h5><small>Tax: $ <b>{tax}</b></small></h5>
                <h4 className="border-top border-secondary">Total Price: $<b>{grandTotal}</b></h4>
                <br />
                <Link to="/confirmOrder" className="btn btn-primary" onClick={()=> setCart([])}>Place Order</Link>
            </div>
        </div>
    );
};

export default Cart;