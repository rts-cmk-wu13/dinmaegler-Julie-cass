import React from "react";
import { NavLink } from "react-router-dom";
import dinMaegler from "../../assets/Din_maegler.png";
function Navigation() { 
    return (
        <>
         <nav className="header-menu">
            <NavLink><img className="Menu_Logo" src={dinMaegler} alt="" /></NavLink>
                <ul className="menu">
                    <li className="menu_item"><NavLink className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""} to="/List">Boliger til salg</NavLink></li>

                    <li className="menu_item"><NavLink className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""} to="/Workers">Mæglere</NavLink></li>

                    <li className="menu_item"><NavLink className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""} to="/">Mine favoritter</NavLink></li>

                    <li className="menu_item"><NavLink className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""} to="/Contact">Kontakt os</NavLink></li>
                </ul>
            </nav>
        </>
    );
} export default Navigation;    