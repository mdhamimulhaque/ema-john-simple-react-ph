import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { addToDb, deleteShoppingCart, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import "./Store.css";

const Store = () => {

    // const { products, count } = useLoaderData()
    const [products, setProducts] = useState([]);
    const [count, setCount] = useState(0);
    const [cart, setCart] = useState([]);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(10);

    // ---> data load
    useEffect(() => {
        const url = `http://localhost:5000/products?page=${page}&size=${size}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setCount(data.count);
                setProducts(data.products);
            })
    }, [page, size])


    const pages = Math.ceil(count / size);

    const clearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }


    useEffect(() => {
        const storedCard = getStoredCart();
        const savedCart = [];

        const ids = Object.keys(storedCard);
        fetch(`http://localhost:5000/productsByIds`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(ids)
        })
            .then(res => res.json())
            .then(data => {
                for (const id in storedCard) {
                    const addedProduct = data.find(product => product._id === id);
                    if (addedProduct) {
                        const quantity = storedCard[id];
                        addedProduct.quantity = quantity;
                        savedCart.push(addedProduct)
                    }
                }
                setCart(savedCart)

            })

    }, [products])

    // ---> handle add to cart
    const handleAddToCart = (product) => {
        let newCart = [];
        const exists = cart.find(pd => pd._id === product._id);

        if (!exists) {
            product.quantity = 1;
            newCart = [...cart, product]
        } else {
            const rest = cart.filter(pd => pd._id !== product._id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists]
        }
        setCart(newCart);
        addToDb(product._id)
    }

    return (
        <>
            <div className='store_area'>
                <section className="store_container">
                    <div className="products_wrapper">
                        {
                            products.map((product) =>
                                <Products
                                    product={product}
                                    key={product._id}
                                    handleAddToCart={handleAddToCart}
                                />)
                        }
                    </div>
                </section>
                <section className="order_container">
                    <Cart cart={cart} clearCart={clearCart}>
                        <Link to='/orders'>
                            <button className='review_btn'>Review Order</button>
                        </Link>
                    </Cart>
                </section>
            </div>
            <div className="pagination">
                <p>Currently selected page: {page} & size: {size}</p>
                {
                    [...Array(pages).keys()].map(number => <button
                        key={number}
                        className={page === number ? "selected" : "pagiBtn"}
                        onClick={() => setPage(number)}
                    >
                        {number}
                    </button>)
                }
                <select onChange={(e) => setSize(e.target.value)}>
                    <option value="5">05</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                </select>
            </div>
        </>
    );
};

export default Store;