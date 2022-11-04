import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import "./Orders.css";

const Order = () => {
    const { products, initialCart } = useLoaderData();
    const [cart, setCart] = useState(initialCart);

    const clearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }


    const handleRemoveItem = (id) => {
        const remaining = cart.filter(product => product._id !== id);
        setCart(remaining);
        removeFromDb(id)
    }

    return (
        <div className='store_area'>
            <section className="store_container">
                <div className="review_wrapper">
                    {
                        cart.map(product =>
                            <ReviewItem
                                key={product._id}
                                product={product}
                                handleRemoveItem={handleRemoveItem}

                            />)
                    }

                    {
                        cart.length === 0 && <h2>No iteams for review. Please go to <Link to='/'>store</Link></h2>
                    }
                </div>
            </section>
            <section className="order_container">
                <Cart cart={cart} clearCart={clearCart}>
                    <Link to="/shipping"><button className='review_btn'>Proceed Shipping</button></Link>
                </Cart>
            </section>
        </div>
    );
};

export default Order;