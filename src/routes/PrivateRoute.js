import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/UserContext';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    let location = useLocation();

    if (loading) {
        return <h2>Loading...</h2>
    }

    if (user && user.uid) {
        return children;
    }

    return <Navigate to='/log-in' state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;