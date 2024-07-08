import React, { useState, useContext } from 'react';
import { Context } from "../store/appContext";

export const SignUp = () => {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const {store, actions} = useContext(Context);

const handleClick = () => {
    actions.signUp(email, password)
}


    return (
        <>
            <div className="signup-page">
                <div>
                    <h1>Sign Up</h1>
                </div>
                <div>
                    {store.signupMessage || ""}
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
                    >Sign Up
                    </button>
                </div>
            </div>
        </>
    );
}