import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


function MakeUserForm() {
/*   const [name, setName] = useState("");
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
      setError("Passwords do not match.");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users") || "[]");
    users.push({ id: Date.now(), name, email, password });
    localStorage.setItem("users", JSON.stringify(users));

        setTimeout(() => {
      navigate("/Login");
    }, 1000);
  
 
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    alert("Bruger oprettet succesfuldt!");
    // optionally navigate to login page: window.location.href = "/login";
  }; */

  return (
    <>
     <div className="makeuser-form">
            <form id="MakeuserForm" action="">
                <div className="fieldMU">
                    <label>Fulde navm</label>
                    <input className="makeuser-email-box" id="name" type="name" placeholder="Fulde navn" />
                </div>

                <div className="fieldMU">
                    <label>Email adresse</label>
                    <input className="makeuser-email-box" id="ComfirmEmail" type="email" placeholder="Email adresse" />
                </div>
                <div className="fieldMU">
                    <label>Password</label>
                    <input className="makeuser-password-box" id="Password" type="password" placeholder="Password" />

                </div>
                <div className="fieldMU">
                    <label>Bekrøft password</label>
                    <input className="makeuser-password-box" id="ComfirmPassword" type="password" placeholder="Password" />
                </div>
                <button type="submit" className="submit-makeuser-btn">Opret bruger</button>
            </form>
            </div>
    </>
  );
} export default MakeUserForm

