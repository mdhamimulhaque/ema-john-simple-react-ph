import React from 'react';
import './Cart.css';

const Cart = ({ cart, clearCart, children }) => {


    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for (let product of cart) {
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;
    }
    const tax = parseFloat((total * 0.1).toFixed(2));

    const grandTotal = (total + shipping + tax).toFixed(2);

    return (
        <div className='order_box'>
            <h2 className='order_title'>Order Summary</h2>
            <p>Selected Items : {cart.length}</p>
            <p>Items Quantity : {quantity}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping Charge: ${shipping}</p>
            <p>Tax: ${tax}</p>
            <h4>Grand Total: ${grandTotal}</h4>
            <button className='clear_btn' onClick={clearCart}>Clear Cart</button>
            {children}
        </div>
    );
};

export default Cart;