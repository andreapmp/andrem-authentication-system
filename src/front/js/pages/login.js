import React, { useState, useContext, useEffect } from 'react';
import { useNavigate, Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const { store, actions } = useContext(Context);

    const handleClick = () => {
        actions.login(email, password)
    }

    useEffect(() => {
        if (store.isLoginSuccessful) {
            navigate('/private')
        }
    }, [store.isLoginSuccessful])

    return (
        <>
            <div className="login-page">
                {(store.token && store.token !== "" && store.token != undefined) ? (
                    <>
                        <h1>You are logged in</h1>
                        <Link to='/private'>
                            <button>Go to your invoices</button>
                        </Link>
                    </>
                ) : (
                    <div className='login-container mx-5'>
                        <div className='login-title mt-5'>
                            <h1>Log In</h1>
                        </div>
                        <div>
                            {store.loginMessage || ""}
                        </div>

                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">
                                Email address
                            </label>
                            <input
                                onChange={e => setEmail(e.target.value)}
                                type="email"
                                className="form-control"
                                id="exampleInputEmail1"
                                placeholder="Enter email"
                                value={email}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">
                                Password
                            </label>
                            <input
                                onChange={e => setPassword(e.target.value)}
                                type="password"
                                className="form-control"
                                id="exampleInputPassword1"
                                placeholder="Enter password"
                                value={password}
                                required
                            />
                        </div>
                        <div className='login-button mt-4 text-center'>
                            <button onClick={handleClick} type="submit" className="btn btn-primary">
                                Login
                            </button>
                        </div>
                        <div className='join-link mt-3 text-center'>
                            <Link to="/signup">
                                Don't have an account? Join Now
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}