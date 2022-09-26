import React from 'react';
import './products.css';

const Products = (props) => {
    const { img, name, price, seller, ratings } = props.product;
    console.log(props.product)
    return (
        <div className='products_box'>
            <div className="product_img">
                <img src={img} alt="" />
            </div>
            <div className="product_info_box">
                <h2>{name}</h2>
                <p><strong>Price : ${price}</strong></p>
                <p className='small_text'>Manufacturer : {seller}</p>
                <p className='small_text'>Rating : {ratings} start</p>
            </div>
            <button className='add_to_cart_btn'>Add To Cart</button>
        </div>
    );
};

export default Products;