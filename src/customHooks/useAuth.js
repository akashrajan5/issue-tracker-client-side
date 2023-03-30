import React, { useState, createContext, useContext } from 'react';
// import { useNavigate } from 'react-router-dom';

const AuthContext = createContext(null);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [error, setError] = useState(null);
    const [user, setUser] = useState(null);


    const login = (authToken, data, error = null) => {
        if (error) return setError(error);
        setUser(data);
        localStorage.setItem('auth-token', authToken);
        setIsLoggedIn(true);
    };

    const logout = () => {
        localStorage.removeItem('auth-token');
        setUser(null);
        setIsLoggedIn(false);
    };

    const logged = () => {
        if (localStorage.getItem('admin') !== "") setIsLoggedIn(true);
    };


    return (
        <AuthContext.Provider value={{ isLoggedIn, logged, user, error, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};