import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../customHooks/useAuth";

export const Navbar = () => {
    const auth = useAuth();
    const navigate = useNavigate();
    const logout = () => {
        auth.logout();
        navigate('/login');
    };

    return (
        <nav className="navbar bg-light navbar-light px-2">
            <div className="d-flex justify-content-center align-items-center">
                <a className="navbar-brand d-flex justify-content-center align-items-center m-0 p-0 me-2" href="/dashboard">
                    <span className="material-symbols-outlined">grid_view</span>
                </a>
                Bug tracking
            </div>
            <div>
                <button className="text-dark d-flex justify-content-center align-items-center btn p-0 border-none" onClick={logout}>
                    <span className="material-symbols-outlined">account_circle</span>
                </button>
            </div>
        </nav>
    );
};