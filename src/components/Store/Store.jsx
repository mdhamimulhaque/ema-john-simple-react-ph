import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import "./Store.css";

const Store = () => {

    const products = useLoaderData()
    const [cart, setCart] = useState([])


    useEffect(() => {
        const storedCard = getStoredCart();
        const savedCart = [];
        for (const id in storedCard) {
            const addedProduct = products.find(product => product.id === id);
            if (addedProduct) {
                const quantity = storedCard[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct)
            }
        }
        setCart(savedCart)
    }, [products])

    // ---> handle add to cart
    const handleAddToCart = (product) => {
        let newCart = [];
        const exists = cart.find(pd => pd.id === product.id);

        if (!exists) {
            product.quantity = 1;
            newCart = [...cart, product]
        } else {
            const rest = cart.filter(pd => pd.id !== product.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists]
        }
        setCart(newCart);
        addToDb(product.id)
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
                <Cart cart={cart} />
            </section>
        </div>
    );
};

export default Store;