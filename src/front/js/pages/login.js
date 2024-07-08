import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const Login = () => {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const navigate = useNavigate();
const {store, actions} = useContext(Context);

const handleClick = () => {
    actions.login(email, password). then(() => {
        navigate('/private')
    })
}



    return (
        <>
            <div className="login-page">
                <div>
                    <h1>Log In</h1>
                </div>
                <div>
                    {store.loginMessage || ""}
                </div>
                <div>
                    <input 
                        type="email" 
                        placeholder="Enter email" 
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                    />
                    <input 
                        type="password"
                        placeholder="Enter password" 
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <button
                        onClick={handleClick}
                    >Login
                    </button>
                </div>
            </div>
        </>
    );
}