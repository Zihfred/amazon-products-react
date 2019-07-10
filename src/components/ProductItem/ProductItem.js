import React from 'react';
import Image from "react-bootstrap/Image";
import s from './ProductItem.module.css'
import Jumbotron from "react-bootstrap/Jumbotron";

const ProductItem = ({name, price, currency, img, bsr_category}) => {
    console.log();
    return <Jumbotron>
        <h2>{name}</h2>
        <h2>{bsr_category}</h2>
        <Image src={img} alt={img} rounded className={s.image}/>
        <h2>{`Price: ${price}${currency}`}</h2>
    </Jumbotron>
};

export default ProductItem;

