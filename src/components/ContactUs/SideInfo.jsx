import React from "react";

import { SiMinutemailer } from "react-icons/si";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";


function SideInfo() {
    return (
        <>
            <section className="info-section">

                <div className="info-Box">
                    <li><FaPhoneAlt /></li>
                    <h3>Ring til os</h3>
                    <p>++ 45 7070 4000</p>
                </div>

                <div className="info-underline"></div>

                <div className="info-Box">
                    <li><SiMinutemailer /></li>
                    <h3>Send en mail</h3>
                    <p>4000@dinmaegler.dk</p>
                </div>

                <div className="info-underline"></div>

                <div className="info-Box">
                    <li><FaMapMarkerAlt /></li>
                    <h3>Besæg butikken</h3>
                    <p>Stændertorvet 78,</p>
                    <p>4000 Roskilde</p>
                </div>

            </section>
        </>
    )
} export default SideInfo