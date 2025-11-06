import React from "react";
import WorkerCard from "./worker";  
import { NavLink } from "react-router-dom";

import "./employes.scss";

function Employees() {
    return(
        <>
     <div className="worker-header">
        <h2>Mød vores engagerede medarbejdere</h2>
        <p>Din Mægler er garant for altid veluddannet assistance i dit boligsalg.
             Kontakt en af vores medarbejdere.</p>
      </div>
<WorkerCard />
<div className="worker-header">
<NavLink to="/workers/:id"><button className="home-w-btn">Se alle mæglere</button></NavLink>
</div>

              </>
    )
}           export default Employees;