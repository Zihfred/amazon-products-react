import React from 'react';
import Image from "react-bootstrap/Image";
import s from './ProductItem.module.css'
import Jumbotron from "react-bootstrap/Jumbotron";

const ProductItem = ({name, price, currency, img, bsr_category}) => {
    console.log();
    return <Jumbotron>
        <p>Category: {bsr_category}</p>
        <Image src={img} alt={img} rounded className={s.image}/>
        <p>{name}</p>
        <h3>{`Price: ${price} ${currency}`}</h3>
    </Jumbotron>
};

export default ProductItem;

