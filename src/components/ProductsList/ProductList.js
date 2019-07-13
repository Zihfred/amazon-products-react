import React from 'react';
import ProductItem from '../ProductItem/ProductItem';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import {connect} from "react-redux";



const ProductList = (props) =>{
    return(
        <Row>
            {props.filteredProducts.map(product => <Col key={product.name} md={4} sm={6} xs={12} className='row-flex row-flex-wrap'><ProductItem key={product['bsr_value']}{...product}/></Col>)}
        </Row>
    )
};

const mapStateToProps = (state) =>({
    filteredProducts: state.filteredProducts,
});

export default connect(mapStateToProps,null)(ProductList);
