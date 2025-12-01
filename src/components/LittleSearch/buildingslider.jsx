import React from "react";
import "./buildingslider.scss";

function Buildingslider() {



    
    return(
    <>
    <div className="slider">
        <input type="range" min="1" max="100" className="slider-input"/>
        <input value="1000" min="1000" max="50000" step="500" type="range"></input>
        <input value="50000" min="1000" max="50000" step="500" type="range"></input>
    </div>
    </>

  );
}export default Buildingslider;