import React from "react";
import { NavLink } from "react-router-dom";

import "./Error.scss";

function Error() {

    return (
        <>
            <section className="error-section">

                <div className="top-error-box">
                    <h1>Hov!</h1>
                </div>

                <div className="error-txt-box">
                    <h3>Du er havnet på en side som ikke findes! </h3>
                    <p>Det er vi kede af! Vi har sendt en besked af sted til vores</p>
                    <p>internetbureau, og bedt dem se på fejlen.</p>
                </div>

                <NavLink className="errorBTN-home" to="/">Tilbage til forsiden</NavLink>
            </section>
        </>
    )
} export default Error;