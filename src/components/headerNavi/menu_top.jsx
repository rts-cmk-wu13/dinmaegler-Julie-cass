import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

import { SiMinutemailer } from "react-icons/si";
import { FaPhoneAlt } from "react-icons/fa";
import { BsPersonFill } from "react-icons/bs";

function MenuTop() {
const { isLoggedIn, logout, user } = useAuth();

    return(
        <>
        <div className="top_bg">
       <nav className="top_menu">
        <ul className="top">
            <div>
            <li className="top_item"><SiMinutemailer className="SiMinutkite"/> 4000@dinmaegler.com</li>
            <li className="top_item"><FaPhoneAlt className="SiMinut"/> +45 7070 4000</li>
            </div>

            <div>
                {isLoggedIn ? (
  <li className="top_item" onClick={logout} style={{ cursor: "pointer" }}>
    <BsPersonFill /> Log ud
  </li>
) : (
  <NavLink to="/Login">
    <li className="top_item">
      <BsPersonFill /> Log ind
    </li>
  </NavLink>
)}
            </div>
        </ul>
       </nav>
        </div>
        </>
    )
}
export default MenuTop;