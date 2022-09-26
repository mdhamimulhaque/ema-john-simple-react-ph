import React from 'react';
import Order from '../Order/Order';
import Products from '../Products/Products';
import "./Store.css";

const Store = () => {
    return (
        <div className='store_area'>
            <section className="store_container">
                <div className="products_wrapper">
                    <Products />
                    <Products />
                    <Products />
                    <Products />
                    <Products />
                    <Products />
                </div>
            </section>
            <section className="order_container">
                <Order />
            </section>
        </div>
    );
};

export default Store;