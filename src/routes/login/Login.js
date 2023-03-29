import React from "react";
import '../../assets/css/login.css';

export const Login = () => {
    return (
        <div className="outer">
            <div>
                <div>
                    <h3 className="header-text">Bug tracking system</h3>
                </div>
                <form>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="example@gmail.com" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="passwordFormControlInput1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="passwordFormControlInput1" />
                    </div>
                    <div>
                        <button type="submit" className="btn btn-primary">Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
};