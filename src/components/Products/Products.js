import React, { useEffect, useState } from 'react';
import ShowProducts from '../ShowProducts/ShowProducts';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
    return (
        <div className="row row-cols-1 row-cols-md-3 g-4">
            {
                products.map(product => <ShowProducts id={product.id} product={product} />)
            }
        </div>
    );
};

export default Products;