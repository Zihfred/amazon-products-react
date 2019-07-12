import React from 'react';
import ProductItem from '../ProductItem/ProductItem';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";


const ProductList = ({products}) =>{
    if (!products) return <div>Loading...</div>
    return(
        <Row>
            {products.map(product => <Col md={4} sm={6} xs={12} className='row-flex row-flex-wrap'><ProductItem key={product['bsr_value']}{...product}/></Col>)}
        </Row>
    )
};

export default ProductList;
