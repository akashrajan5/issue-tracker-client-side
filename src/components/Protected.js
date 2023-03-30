import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../customHooks/useAuth';

export const Protected = ({ children }) => {
    const auth = useAuth();
    if (!auth.logged) return <Navigate to="/login" replace={true} />;
    return children;
};
