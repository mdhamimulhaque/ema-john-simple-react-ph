import React from 'react';
import './ReviewItem.css';

const ReviewItem = ({ product }) => {
    const { name, quantity, img, price } = product;
    return (
        <div className='review_box'>
            <div className="review_item_details">
                <img src={img} alt="" />
                <div className="review_info">
                    <h4>{name}</h4>
                    <p><strong>Price :</strong> ${price}</p>
                    <p><small>Quantity : {quantity}</small></p>
                </div>
            </div>
            <div className="remove_btn">
                <button>Remove</button>
            </div>
        </div>
    );
};

export default ReviewItem;