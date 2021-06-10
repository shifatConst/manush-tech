import React, { useContext } from 'react';
import { cartContext } from '../../App';
import './RemoveItems.css';

const RemoveItems = (props) => {
    const [cart, setCart] = useContext(cartContext);
    const { title, price, image, id } = props.product

    //remove from cart handler
    const handleRemove = (id) => {
        const newCart = cart.filter(pd => pd.id !== id);
        setCart(newCart);
    }
    return (
        <div className="d-flex m-3">
            <div>
                <img className="cart-img" src={image} alt="" />
            </div>
            <div>
                <h3>{title}</h3>
                <h3>{price}</h3>
                <button className="btn btn-primary" onClick={() => handleRemove(id)}>Remove</button>
            </div>
        </div>
    );
};

export default RemoveItems;