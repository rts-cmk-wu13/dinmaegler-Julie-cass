import React from "react";
import { NavLink } from "react-router-dom";

import MakeUser from "./MakeUser";
function LoginForm() {
    return (
        <>
        <section className="login-form-box">
            <form action="login">
                <div className="field">
                    <label>Email</label>
                    <input className="email-login-box" type="email" placeholder="Email" />
                </div>
                <div className="field">
                    <label>Password</label>
                    <input className="password-login-box" type="text" placeholder="Password" />
                </div>
                <button type="submit" className="submit-login-btn">Log Ind</button>
            </form>

            <div className="login-ways-btns">
                <button className="google-btn">
Google
                </button>

                <button className="facebook-btn">
Facebook
                </button>

                <button className="twitter-btn">
Twitter
                </button>
            </div>


            <div>
                <p>Har du ikke en konto? <NavLink to="/makeuser">Opret bruger.</NavLink></p>
            </div>
            </section>
        </>
    )
} export default LoginForm