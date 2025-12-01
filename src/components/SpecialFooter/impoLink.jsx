import React from "react";
import { NavLink } from "react-router-dom";

import "./ImpoLinks.scss";

function ImpoLink(){
    return(
        <>
        <div className="impo-links">

                <ul className="links-columns">
                  <li><NavLink to="/">› Our Services</NavLink></li>
                  <li><NavLink to="/">› Privacy</NavLink></li>
                  <li><NavLink to="/Contact">› Contacts</NavLink></li>
                  <li><NavLink to="/Workers">› Meet Our Team</NavLink></li>
                  <li><NavLink to="/Contact">› Help Desk</NavLink></li>
                    </ul>
        
        </div>
        </>
    )
} export default ImpoLink;