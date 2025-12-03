import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function MakeUserForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!name || !email || !password || !confirmPassword) {
      setError("Udfyld alle felter.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords matcher ikke.");
      return;
    }

    // Get existing users
    const users = JSON.parse(localStorage.getItem("users") || "[]");

    // Check if email already exists
    const userExists = users.some((user) => user.email === email);
    if (userExists) {
      setError("Email er allerede i brug.");
      return;
    }

    // Add new user
    users.push({
      id: Date.now(),
      name,
      email,
      password,
    });

    localStorage.setItem("users", JSON.stringify(users));

    alert("Bruger oprettet succesfuldt!");

    // Clear form
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");

    // Redirect to login
    navigate("/Login");
  };

  return (
    <div className="makeuser-form">
      <form id="MakeuserForm" onSubmit={handleSubmit}>
        {error && <p style={{ color: "red" }}>{error}</p>}

        <div className="fieldMU">
          <label>Fulde navn</label>
          <input
            className="makeuser-email-box"
            type="text"
            placeholder="Fulde navn"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="fieldMU">
          <label>Email adresse</label>
          <input
            className="makeuser-email-box"
            type="email"
            placeholder="Email adresse"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="fieldMU">
          <label>Password</label>
          <input
            className="makeuser-password-box"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="fieldMU">
          <label>Bekræft password</label>
          <input
            className="makeuser-password-box"
            type="password"
            placeholder="Bekræft password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="submit-makeuser-btn">
          Opret bruger
        </button>
      </form>
    </div>
  );
}

export default MakeUserForm;
