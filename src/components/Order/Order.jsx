import React from 'react';
import './Order.css';

const Order = ({ cart }) => {
    console.log(cart)

    let total = 0;
    let shipping = 0;
    for (let product of cart) {
        total = total + product.price;
        shipping = shipping + product.shipping;
    }
    const tax = parseFloat((total * 0.1).toFixed(2));

    const grandTotal = (total + shipping + tax).toFixed(2);

    return (
        <div className='order_box'>
            <h2 className='order_title'>Order Summary</h2>
            <p>Selected Items : {cart.length}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping Charge: ${shipping}</p>
            <p>Tax: ${tax}</p>
            <h4>Grand Total: ${grandTotal}</h4>
            <button className='clear_btn'>Clear Cart</button>
            <button className='review_btn'>Review Order</button>
        </div>
    );
};

export default Order;