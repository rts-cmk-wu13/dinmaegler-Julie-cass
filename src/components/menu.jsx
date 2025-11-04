import React from "react";
import { NavLink } from "react-router-dom";
import MenuTop from "./menu_top.jsx";

function menu() {
    return (
        <>
<MenuTop />
            <nav className="header-menu">
                <ul className="menu">
                    <li className="menu_item"><NavLink className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""} to="/">Boliger til salg</NavLink></li>

                    <li className="menu_item"><NavLink className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""} to="/List">Møglere</NavLink></li>

                    <li className="menu_item"><NavLink className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""} to="/">Mine favoritter</NavLink></li>

                    <li className="menu_item"><NavLink className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""} to="/">Kontakt os</NavLink></li>
                </ul>
            </nav>
        </>
    );
}
export default menu;