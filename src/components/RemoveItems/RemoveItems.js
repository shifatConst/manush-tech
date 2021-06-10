import React, { useContext } from 'react';
import { cartContext } from '../../App';
import './RemoveItems.css';

const RemoveItems = (props) => {
    const [cart, setCart] = useContext(cartContext);
    const { title, price, image, id } = props.product
    // const {price, title, image} = cart;
    // console.log(price, title, image);
    console.log(title, price, image, id);

    const handleRemove = (id) => {
        console.log('remove clicked', id);
        const newCart = cart.filter(pd => pd.id !== id);
        setCart(newCart);
    }
    return (
        <div className="d-flex">
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