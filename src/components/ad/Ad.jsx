import React from "react";
import "./Ad.scss";
import { NavLink } from "react-router-dom";

import phone1 from "../../assets/phones.png";
import { PiGooglePlayLogoFill } from "react-icons/pi";
import { FaApple } from "react-icons/fa";


function Ad() {
  return (
    <>
      <section className="Ad-section">
        <div className="Ad-content">
          <div className="Ad-txt">
            <div className="ad-title">
              <h2>Hold dig opdateret
                på salgsprocessen</h2>
            </div>
            <div className="ad-para">
              <p>Når du sælger din bolig hos Din Mægler,
                kommunikerer du nemt med den ansvarlige mægler eller butik med vores app.
                Her kan du også se statistik på interessen for din bolig i alle vores salgskanaler.</p>
            </div>
            <div className="btn-box">
              <NavLink to="/">
                <button className="Ad-button google" onClick={() => window.scrollTo(0, 0)}>
                  <PiGooglePlayLogoFill /> Google Play
                </button>
              </NavLink>

              <NavLink to="/">
                <button className="Ad-button apple" onClick={() => window.scrollTo(0, 0)}>
                  <FaApple /> Apple Store
                </button>
              </NavLink>
            </div>
          </div>
          <div className="Ad-picture-container">
            <img src={phone1} alt="" />


          </div>
        </div>
      </section>
    </>
  );
} export default Ad;