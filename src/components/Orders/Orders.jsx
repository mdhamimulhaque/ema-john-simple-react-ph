import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import "./Orders.css";

const Order = () => {
    const { products, initialCart } = useLoaderData();
    const [cart, setCart] = useState(initialCart);

    return (
        <div className='store_area'>
            <section className="store_container">
                <div className="review_wrapper">
                    {
                        cart.map(product => <ReviewItem key={product.id} product={product} />)
                    }
                </div>
            </section>
            <section className="order_container">
                <Cart cart={cart} />
            </section>
        </div>
    );
};

export default Order;