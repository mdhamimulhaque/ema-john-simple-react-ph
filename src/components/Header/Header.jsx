import logo from '../../images/Logo.svg'
import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className='header_container'>
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <nav className='header_nav'>
                <Link to="/orders">Orders</Link>
                <Link to="/store">Store</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">About</Link>
            </nav>
        </header>
    );
};

export default Header;