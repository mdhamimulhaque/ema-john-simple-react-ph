import React from 'react';
import './ReviewItem.css';
import { TrashIcon } from '@heroicons/react/24/solid'

const ReviewItem = ({ product, handleRemoveItem }) => {
    const { id, name, quantity, img, price, shipping } = product;
    return (
        <div className='review_box'>
            <div className="review_item_details">
                <img src={img} alt="" />
                <div className="review_info">
                    <h4>{name}</h4>
                    <p><strong>Price :</strong> ${price}</p>
                    <p><small>Shipping : ${shipping}</small></p>
                    <p><small>Quantity : {quantity}</small></p>
                </div>
            </div>
            <TrashIcon
                className="h-6 w-6 text-blue-500 remove_btn"
                onClick={() => handleRemoveItem(id)}
            />
        </div>
    );
};

export default ReviewItem;