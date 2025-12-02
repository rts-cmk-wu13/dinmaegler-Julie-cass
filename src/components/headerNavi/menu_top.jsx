import React from "react";
import { NavLink } from "react-router-dom";


import { SiMinutemailer } from "react-icons/si";
import { FaPhoneAlt } from "react-icons/fa";
import { BsPersonFill } from "react-icons/bs";

function MenuTop() {
    return(
        <>
        <div className="top_bg">
       <nav className="top_menu">
        <ul className="top">
            <div>
            <li className="top_item"><SiMinutemailer/>4000@dinmaegler.com</li>
            <li className="top_item"><FaPhoneAlt/>+45 7070 4000</li>
            </div>
            <div>
            <NavLink to="/Login"><li className="top_item"><BsPersonFill/>Lod ind</li></NavLink>
            </div>
        </ul>
       </nav>
        </div>
        </>
    )
}
export default MenuTop;