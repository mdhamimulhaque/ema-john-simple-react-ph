import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';
import "./LogIn.css";

const LogIn = () => {

    const { logInUser } = useContext(AuthContext);
    const navigate = useNavigate()

    const handleLogInUser = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        form.reset();
        navigate("/")

        logInUser(email, password)
            .then((res) => {
                const user = res.user;
                console.log("Login successfully", user)
            })
            .catch((error) => {
                console.error(error)
            });
    }
    return (
        <div className='form-container'>
            <h2 className='form-title'>Login</h2>
            <form onSubmit={handleLogInUser}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" required />
                </div>
                <input className='btn-submit' type="submit" value="Login" />
            </form>
            <p>New to ema john <Link to='/sign-up'>Create a New Account</Link></p>
        </div>
    );
};

export default LogIn;