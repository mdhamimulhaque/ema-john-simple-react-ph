import React, { useEffect, useState } from 'react';
import Order from '../Order/Order';
import Products from '../Products/Products';
import "./Store.css";

const Store = () => {

    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    // ---> handle add to cart
    const handleAddToCart = (product) => {
        const newCart = [...cart, product]
        setCart(newCart)
        console.log(newCart)
    }

    return (
        <div className='store_area'>
            <section className="store_container">
                <div className="products_wrapper">
                    {
                        products.map((product) =>
                            <Products
                                product={product}
                                key={product.id}
                                handleAddToCart={handleAddToCart}
                            />)
                    }
                </div>
            </section>
            <section className="order_container">
                <Order cart={cart} />
            </section>
        </div>
    );
};

export default Store;