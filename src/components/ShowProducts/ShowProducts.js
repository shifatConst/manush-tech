import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons'

const ShowProducts = (props) => {
    // console.log(props);
    const { title, price, description, image } = props.product;
    // console.log(props.handleAddProduct);
    return (
        <div className="col-sm-3 mt-3 text-center">
            <div className="col">
                <div className="card h-100 shadow">
                    <img src={image} className="card-image-top" alt="" />
                    <div className="card-body">
                        <h5 className="card-title"> {title} </h5>
                        <p className="card-text">{description}</p>
                        <p>{price}</p>
                    </div>
                    <div className="card-footer">
                        <button className="btn btn-primary" onClick={() => props.handleAddProduct(props.product)}> <FontAwesomeIcon icon={faShoppingCart} /> Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowProducts;