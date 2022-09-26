import React from 'react';
import './Order.css';

const Order = ({ cart }) => {

    return (
        <div className='order_box'>
            <h2 className='order_title'>Order Summary</h2>
            <p>Selected Items : {cart.length}</p>
            <p>Total Price: $1140</p>
            <p>Total Shipping Charge: $5</p>
            <p>Tax: $114</p>
            <h4>Grand Total: $1559</h4>
            <button className='clear_btn'>Clear Cart</button>
            <button className='review_btn'>Review Order</button>
        </div>
    );
};

export default Order;