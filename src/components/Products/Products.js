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
        <div className="row row-cols-1 row-cols-md-3 g-4">
            {
                products.map(product => <ShowProducts id={product.id} product={product} handleAddProduct={props.handleAddProduct} />)
            }
        </div>
    );
};

export default Products;