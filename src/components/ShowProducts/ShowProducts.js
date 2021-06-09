import React from 'react';

const ShowProducts = (props) => {
    // console.log(props);
    const { title, price, description, image } = props.product;
    console.log(title);
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
                </div>
            </div>
        </div>
    );
};

export default ShowProducts;