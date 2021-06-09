import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { cartContext } from '../../App';

const Cart = () => {
    // const {cart} = props
    // console.log(cart.length);

    const [cart, setCart] = useContext(cartContext)

    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }

    let totalPrice = 0;
    let shippingCost = 0;

    for(let i = 0; i < cart.length; i++){
        const product = cart[i];
        totalPrice = totalPrice + product.price
    }

    if(totalPrice > 35){
        shippingCost = 0;
    }
    else if(totalPrice > 15){
        shippingCost = 4.99;
    }
    else if(totalPrice > 0){
        shippingCost = 12.99
    }

    const tax = (totalPrice / 3).toFixed(2);
    const grandTotal = (totalPrice + shippingCost + Number(tax)).toFixed(2);


    return (
        <div>
            <h4>Order Summary</h4>
            <p>Items Ordered: <b>{cart.length}</b></p>
            <p>Product Price:$ <b>{formatNumber(totalPrice)}</b></p>
            <p><small>Shipping Cost: $ <b>{shippingCost}</b></small></p>
            <p><small>Tax: $ <b>{tax}</b></small></p>
            <p>Total Price: $ <b>{grandTotal}</b></p>
            <br />
            <Link to="/" className="btn btn-primary">Place Order</Link>
        </div>
    );
};

export default Cart;