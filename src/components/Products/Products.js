import React, { useEffect, useState } from 'react';
import ShowProducts from '../ShowProducts/ShowProducts';

const Products = (props) => {
    const [products, setProducts] = useState([]);

    //fetching the data from the api
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>
            <div className="text-center">

                {/* spinner for loading time */}
                {
                    products.length === 0 && <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                }
            </div>

            <div className="row row-cols-1 row-cols-md-3 g-4 px-3">
                {
                    products.map(product => <ShowProducts key={product.id} product={product} handleAddProduct={props.handleAddProduct} />)
                }
            </div>
        </div>
    );
};

export default Products;