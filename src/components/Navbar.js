import React from "react";

export const Navbar = () => {
    return (
        <nav className="navbar bg-light navbar-light px-2">
            <div className="d-flex justify-content-center align-items-center">
                <a className="navbar-brand d-flex justify-content-center align-items-center m-0 p-0 me-2" href="/dashboard">
                    <span className="material-symbols-outlined">grid_view</span>
                </a>
                Bug tracking
            </div>
            <div>
                <a className="text-dark d-flex justify-content-center align-items-center text-decoration-none" href="/">
                    <span className="material-symbols-outlined">account_circle</span>
                </a>
            </div>
        </nav>
    );
};