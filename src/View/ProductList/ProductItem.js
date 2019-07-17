import React from "react";
import Image from "react-bootstrap/Image";
import s from "./ProductItem.module.css";
import Jumbotron from "react-bootstrap/Jumbotron";
import PropTypes from "prop-types";

const ProductItem = ({ brand, price, currency, img, bsr_category }) => {
  console.log();
  return (
    <Jumbotron>
      <h1>{brand}</h1>
      <Image src={img} alt={img} rounded className={s.image} />
      <p>Category: {bsr_category}</p>
      <b>{`Price: ${price} ${currency}`}</b>
    </Jumbotron>
  );
};

ProductItem.propTypes = {
  brand: PropTypes.string,
  price: PropTypes.string,
  currency: PropTypes.string,
  img: PropTypes.string,
  bsr_category:  PropTypes.string
};

export default ProductItem;
