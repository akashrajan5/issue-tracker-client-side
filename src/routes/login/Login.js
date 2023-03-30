import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import '../../assets/css/login.css';
import { loginController } from "../../controller/main";
import { useAuth } from "../../customHooks/useAuth";

export const Login = () => {
    const navigate = useNavigate();
    const inputRef = useRef();
    const passRef = useRef();
    const auth = useAuth();
    const [user, setUser] = useState({ username: '', password: '' });

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    useEffect(() => {
        if (user.username.length > 0) inputRef.current.classList.remove('is-invalid');
        if (user.password.length > 0) passRef.current.classList.remove('is-invalid');
    }, [user]);

    const handleChange = (e) => setUser(prev => { return { ...prev, [e.target.name]: e.target.value }; });

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (user.username === '') return inputRef.current.classList.add('is-invalid');
        if (user.password === '') return passRef.current.classList.add('is-invalid');
        const response = await loginController(user);
        if (response.status !== 200) {
            alert("Invalid username or password");
            inputRef.current.classList.add('is-invalid');
            passRef.current.classList.add('is-invalid');
            return;
        };
        auth.login(user.username, user);
        navigate('/dashboard');
    };

    return (
        <div className="outer">
            <div className="inside-outer">
                <div>
                    <h3 className="header-text">Bug tracking system</h3>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Username</label>
                        <input type="text" name="username" onChange={handleChange} ref={inputRef} className="form-control" id="exampleFormControlInput1" placeholder="admin" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="passwordFormControlInput1" className="form-label">Password</label>
                        <input type="password" ref={passRef} name="password" onChange={handleChange} className="form-control" id="passwordFormControlInput1" />
                    </div>
                    <div>
                        <button type="submit" className="btn btn-primary">Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
};