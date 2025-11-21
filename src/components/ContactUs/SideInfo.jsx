import React from "react";

import { SiMinutemailer } from "react-icons/si";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";


function SideInfo() {
    return (
        <>
            <section className="info-section">

                <div className="info-Box">
                    <button><FaPhoneAlt /></button>
                    <h3>Ring til os</h3>
                    <p>++ 45 7070 4000</p>
                </div>

                <div className="info-underline"></div>

                <div className="info-Box">
                    <button><SiMinutemailer /></button>
                    <h3>Send en mail</h3>
                    <p>4000@dinmaegler.dk</p>
                </div>

                <div className="info-underline"></div>

                <div className="info-Box">
                    <button><FaMapMarkerAlt /></button>
                    <h3>Besæg butikken</h3>
                    <p>Stændertorvet 78,</p>
                    <p>4000 Roskilde</p>
                </div>

            </section>
        </>
    )
} export default SideInfo