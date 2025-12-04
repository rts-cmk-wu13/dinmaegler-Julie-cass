import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function LoginForm() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setError("");

    const email = event.target.elements.Email.value;
    const password = event.target.elements.Password.value;

    // Get users from localStorage
    const users = JSON.parse(localStorage.getItem("users") || "[]");

    // Check if user exists
    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (!user) {
      setError("Forkert email eller password.");
      return;
    }

    login({name: user.name, email: user.email});           // Mark user as logged in
    navigate("/");     // Redirect to homepage
  }

  return (
    <section className="login-form-box">
      <form id="LoginForm" onSubmit={handleSubmit}>
        
        {error && <p style={{color:"red"}}>{error}</p>}

        <div className="Login-field">
          <label htmlFor="Email">Email</label>
          <input
            className="email-login-box"
            id="Email"
            type="email"
            placeholder="Email"
            required
          />
        </div>

        <div className="Login-field">
          <label htmlFor="Password">Password</label>
          <input
            className="password-login-box"
            id="Password"
            type="password"
            placeholder="Password"
            required
          />
        </div>

        <button type="submit" className="submit-login-btn">
          Log Ind
        </button>
      </form>

      <div className="login-ways-btns">
        <button className="google-btn">Google</button>
        <button className="facebook-btn">Facebook</button>
        <button className="twitter-btn">Twitter</button>
      </div>

      <div>
        <p>
          Har du ikke en konto?{" "}
          <NavLink to="/makeuser">Opret bruger.</NavLink>
        </p>
      </div>
    </section>
  );
}

export default LoginForm;
