import logo from '../../images/Logo.svg'
import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className='header_container'>
            <div className="logo">
                <Link to="/">
                    <img src={logo} alt="" />
                </Link>
            </div>
            <nav className='header_nav'>
                <Link to="/">Store</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">About</Link>
                <Link to="/log-in">Log In</Link>
                <Link to="/sign-up">Sign Up</Link>
            </nav>
        </header>
    );
};

export default Header;