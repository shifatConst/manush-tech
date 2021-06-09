import React, { useEffect, useState } from 'react';
import ShowProducts from '../ShowProducts/ShowProducts';

const Products = (props) => {
    const [products, setProducts] = useState([]);
    // console.log(props);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>
            <div className="text-center">
                {
                    products.length === 0 && <div class="spinner-border" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                }
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    products.map(product => <ShowProducts key={product.id} product={product} handleAddProduct={props.handleAddProduct} />)
                }
            </div>
        </div>
    );
};

export default Products;