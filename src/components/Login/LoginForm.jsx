import React from "react";

import { NavLink, useNavigate } from "react-router-dom";

function LoginForm() {
/*     document.getElementById("LoginForm")?.addEventListener("submit", function (e) {
        e.preventDefault();
        const email = document.getElementById("Email").value;
        const password = document.getElementById("Password").value;

        
const navigate = useNavigate();
if(!email || !password){
    alert("Please fill in all fields.");
    return;
}
const users = JSON.parse(localStorage.getItem("users")) || []; 
const user = users.find((user) => user.email === email && user.password === password);
if(user){
    alert("Login successful!");
     setTimeout(() => {
  navigate("/");
}, 1000);
}else{
    alert("invalid email or password.");
}
    }); */

    return (
        <>
            <section className="login-form-box">
                <form id="LoginForm" action="login">
                    <div className="field">
                        <label for="Email">Email</label>
                        <input className="email-login-box" id="Email" type="email" placeholder="Email" required/>
                    </div>
                    <div className="field">
                        <label for="Password">Password</label>
                        <input className="password-login-box" id="Password" type="password" placeholder="Password" required/>
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