import React from "react";
import dinMaegler from "../../assets/Din_maegler.png";
import { NavLink } from "react-router-dom";
import "./footer.scss";


import { FaPhoneAlt } from "react-icons/fa";
import { SiMinutemailer } from "react-icons/si";
import { IoMdPin } from "react-icons/io";

function Footer() {
    return(
        <>
        <div className="footer_bg">
        <div className="footer_otherbg">
            <div className="footer_content">

                <div className="footer_heading">
                    <img className="Menu_Logo" src={dinMaegler} alt="" />
                    <h3 className="footer_h3">
                        There are many variations of passages of Lorem Ipsum available, but the majority <br /> have suffered alteration in some form,
                        by injected humour, or randomised words.
                    </h3>
                </div>
                <div className="footer_info_quicklinks">
                <div className="footer_info">
                    <div className="footer_info_item">
                        <FaPhoneAlt className="footer_icon"/>
                    <div>
                        <p>Ring til os</p>
                        <p>+45 1234 5678</p>
                    </div>
                    </div>
                    <div className="footer_info_item">
                        <SiMinutemailer className="footer_icon"/>
                    <div>
                        <p>Send en mail</p>
                        <p>4000@dinmaegler.com</p>
                    </div>
                    </div>
                    <div className="footer_info_item">
                        <IoMdPin className="footer_icon"/>
                    <div>
                        <p>Butik</p>
                        <p>Stændertorvet 78, 4000 Roskilde</p>
                    </div>
                    </div>
                    <h3>Din Mægler Roskilde, er din <br /> boligibutik i lokalområdet.</h3>
                </div>

                <div className="footer_quicklinks">
                    <h2>Quick links</h2>
                    <li className="menu_item"><NavLink onClick={() => window.scrollTo(0, 0)} className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""} to="/">Boliger til salg</NavLink></li>

                    <li className="menu_item"><NavLink onClick={() => window.scrollTo(0, 0)} className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""} to="/List">Mæglere</NavLink></li>

                    <li className="menu_item"><NavLink onClick={() => window.scrollTo(0, 0)} className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""} to="/">Kontakt os</NavLink></li>

                    <li className="menu_item"><NavLink onClick={() => window.scrollTo(0, 0)} className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""} to="/">Log ind / bliv bruger</NavLink></li>
                    
                    <div className="footer_DMS">
                        <p>Medlem af</p>
                        <p>DMS</p>
                        <p>Dansk Mægler Sammenslutning</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
        </div>
        <section className="footer_Jit">
            <p>Layout By Jit Banik 2020</p>
        </section>
        </>
    )
}
export default Footer;