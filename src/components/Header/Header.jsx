import logo from '../../images/Logo.svg'
import React, { useContext } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';

const Header = () => {
    const { user, logOutUser } = useContext(AuthContext);

    // ---> handle log out
    const handleLogOut = () => {
        logOutUser()
            .then(() => {
                console.log("Log Out successfully")
            }).catch((error) => {
                console.error(error)
            });

    }
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
                {
                    user?.uid
                        ? <button onClick={handleLogOut}>Log Out</button>
                        : <><Link to="/log-in">Log In</Link>
                            <Link to="/sign-up">Sign Up</Link></>
                }
                <span className='header_userInfo'>{user?.email}</span>
            </nav>
        </header>
    );
};

export default Header;