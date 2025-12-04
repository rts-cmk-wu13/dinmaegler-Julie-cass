import React, { useEffect, useState } from "react";

import { useAuth } from "../../context/AuthContext";

import "./detailworker-scss/WorkerDetail.scss";



function Theform() {

    const { user } = useAuth();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [topic, setTopic] = useState("");
    const [message, setMessage] = useState("");
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");


    useEffect(() => {
        if (user) {
            setName(user.name);
            setEmail(user.email);
        }
    })


    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");

        if (!name || !email || !topic || !message) {
            setError("udfyld alle felter.");
            return;
        }

        console.log("form submitted:", { name, email, topic, message });

        setSuccess("Din besked er sendt!");
        setName("");
        setEmail("");
        setTopic("");
        setMessage("");
    }

    return (
        <>

            <form className="contact-form" onSubmit={handleSubmit}>

                {error && <p style={{ color: "red" }}>{error}</p>}
                {success && <p style={{ color: "green" }}>{success}</p>}

                <div className="row">

                    <div className="field" id="top-of-form">
                        <label>Navn</label>
                        <input className="name-box" type="text"
                            placeholder="Indtast navn"
                            value={name}
                            onChange={(e) => setName(e.target.value)} />
                    </div>

                    <div className="field">
                        <label>Email</label>
                        <input className="email-box"
                            type="email"
                            placeholder="Indtast email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} />
                    </div>
                </div>

                <div className="field">
                    <label>Emne</label>
                    <input className="topic-box"
                        type="text"
                        placeholder="Hvad drejer din henvendelse sig om?"
                        onChange={(e) => setTopic(e.target.value)} />
                </div>


                <div className="field">
                    <label>Besked</label>
                    <textarea className="message-box"
                        placeholder="Skriv din besked her…"
                        rows="6"
                        onChange={(e) => setMessage(e.target.value)}></textarea>
                </div>

                <button type="submit" className="submit-btn">Send besked</button>
            </form>

        </>
    );
} export default Theform;  