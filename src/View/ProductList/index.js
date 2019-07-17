import React from "react";
import { connect } from "react-redux";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import PropTypes from "prop-types";

import ProductItem from "./ProductItem";

const ProductList = props => (
  <Row>
    {props.filteredProducts.map(product => (
      <Col
        key={product.name}
        md={4}
        sm={6}
        xs={12}
        className="row-flex row-flex-wrap"
      >
        <ProductItem key={product["bsr_value"]} {...product} />
      </Col>
    ))}
  </Row>
);

ProductItem.propTypes ={
  filteredProducts: PropTypes.array,
}

const mapStateToProps = state => ({
  filteredProducts: state.products.filteredProducts
});

export default connect(
  mapStateToProps,
  null
)(ProductList);
