import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner, Toast } from 'flowbite-react';




import { AuthContext } from '../AuthProver/AuthProvider';


const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <div className="text-center">
            <Spinner aria-label="Default status example" />
        </div>
    }  

    if (user) {

        return children;
    }
    return <Navigate state={{ from: location }} to="/login" replace></Navigate>
};

export default PrivateRoute;