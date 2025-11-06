import React from "react";
import { FaArrowRight } from "react-icons/fa";
import "./newsletter.scss";

function Newsletter() { 
    return (
        <>
         <section className="newsletter-section">
          <div className="newsletter-content">
            <div className="subscribe-txt">
            <h2>Tilmeld dig vores nyhedsbrev og 
            hold dig opdateret på boligmarkedet</h2>
            </div>
            <div className="email-container">
      <input
        type="email"
        placeholder="Indtast din email adresse"
        className="email-input"
      />
      <button className="email-button">
        <FaArrowRight />
      </button>
    </div>
         {/*    <form className="newsletter-form">
              <input type="email" placeholder="Indtast din e-mail" required />
              <button type="submit">Tilmeld</button>
            </form> */}
          </div>
        </section>
        </>
    );
}   export default Newsletter;