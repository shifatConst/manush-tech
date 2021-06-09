import React from 'react';
import './ShowProducts.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons'

const ShowProducts = (props) => {
    // console.log(props);
    const { title, price, description, image } = props.product;
    // console.log(props.handleAddProduct);
    return (
        <div className="col-sm-3 mt-3 text-center">
            <div className="col">
                <div className="card h-100 shadow p-3">
                    <img src={image} className="card-image-top pd-img" alt="" />
                    <div className="card-body">
                        <h5 className="card-title"> {title} </h5>
                        {/* <p className="card-text">{description}</p> */}
                        <h2><b>${price}</b></h2>
                    </div>
                    <div>
                        <button className="btn btn-primary" onClick={() => props.handleAddProduct(props.product)}> <FontAwesomeIcon icon={faShoppingCart} /> Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowProducts;