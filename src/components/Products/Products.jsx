import React from 'react';
import './products.css';

const Products = () => {
    return (
        <div className='products_box'>
            <div className="product_img"></div>
            <div className="product_info_box">
                <h2>Product Title</h2>
                <p><strong>Price : $1200</strong></p>
                <p>Manufacturer : Addidas</p>
                <p>Rating : 3 start</p>
            </div>
        </div>
    );
};

export default Products;