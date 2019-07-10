import React from 'react';
import ProductItem from '../ProductItem/ProductItem';


const ProductList = ({products}) =>{
    if (!products) return <div>Loading...</div>
    return(
        <div>
            {products.map(product => <ProductItem key={product['bsr_value']}{...product}/>)}
        </div>
    )
};

export default ProductList;
