import React from "react";

import "./ContactUs.scss";

import SideInfo from "./SideInfo.jsx";
import ContactForm from "./ContactForm.jsx";
function ContactUs() {
    return (
        <>
            <section className="contact-us-section">
                <div className="contact-p-txt">
                    <h2>Vi sidder klar til at besvare dine spørgsmål</h2>
                    <div className="title-underline"></div>
                    <p>Der kan opstå tvivl om mange ting nå man gerne vil, eller er i gang med at sælge sin bolig.
                        Vores medarbejdere sider klar alle ugens dage til at svare på dine spørgsmål.</p>
                </div>

                <div className="topPart">
                    
                    <div className="side-contact">
                        <ContactForm />
                    </div>


                    <div className="side-info">
                        <SideInfo />
                    </div>
                </div>
            </section>
                <iframe className="contact-map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2251.7637258945324!2d12.077808577158969!3d55.64092440060248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46525fda8582267b%3A0x3a79b4f713b2bf83!2sSt%C3%A6ndertorvet%2078%2C%204000%20Roskilde!5e0!3m2!1sen!2sdk!4v1763643234356!5m2!1sen!2sdk"
                    width="1900"
                    height="450"

                    allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                </iframe>
        </>
    )
} export default ContactUs