import React, { useEffect, useState } from 'react';
import Order from '../Order/Order';
import Products from '../Products/Products';
import "./Store.css";

const Store = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div className='store_area'>
            <section className="store_container">
                <div className="products_wrapper">
                    {
                        products.map((product) =>
                            <Products
                                product={product}
                                key={product.id}
                            />)
                    }
                </div>
            </section>
            <section className="order_container">
                <Order />
            </section>
        </div>
    );
};

export default Store;