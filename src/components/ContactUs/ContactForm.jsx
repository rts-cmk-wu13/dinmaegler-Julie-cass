import React from "react";


import "./ContactForm.scss";
function ContactForm() {

    return (
        <>

            <form className="contact-form">

                <div className="row">

                    <div className="Contact-field" id="top-of-form">
                        <label>Navn</label>
                        <input className="Contact-name-box" type="text" placeholder="Indtast navn" />
                    </div>

                    <div className="Contact-field">
                        <label>Email</label>
                        <input className="Contact-email-box" type="email" placeholder="Indtast email" />
                    </div>
                </div>

                <div className="Contact-field">
                    <label>Emne</label>
                    <input className="Contact-topic-box" type="text" placeholder="Hvad drejer din henvendelse sig om?" />
                </div>


                <div className="Contact-field">
                    <label>Besked</label>
                    <textarea className="Contact-message-box" placeholder="Skriv din besked her…" rows="6"></textarea>
                </div>
                <div className="Contact-field">
<label className="checkbox">
  <input type="checkbox" className="my-checkbox" />
Ja tak, jeg vil gerne modtage Din Mæglers nyhedsbrev.
</label>
</div>
<div className="Contact-btn-con">
                <button type="submit" className="Contact-submit-btn">Send besked</button>
                </div>
            </form>

        </>
    );
} export default ContactForm;  