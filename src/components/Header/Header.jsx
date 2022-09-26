import logo from '../../images/Logo.svg'
import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className='header_container'>
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <nav className='header_nav'>
                <a href="/home">Home</a>
                <a href="/about">About</a>
                <a href="/store">Store</a>
            </nav>
        </header>
    );
};

export default Header;