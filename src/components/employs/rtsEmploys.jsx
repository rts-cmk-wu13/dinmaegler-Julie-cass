import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import { IoMail } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa";

import "./rtsEmployes.scss";

function rtsWorkerCard() {



    const [RTSWORKER, setRTSWORKER] = useState(null);
    const [loading, setLoading] = useState(true);
    const API_URL = "https://dinmaegler.onrender.com/agents?";
    
    
    useEffect(() => {
     fetch(API_URL)
        .then(response => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then(data => {
          console.log("Data fetched:", data);
          setRTSWORKER(data);
          setLoading(false);
        })
        .catch(error => {
          console.error("Fetch error:", error);
          setLoading(false);
        });
    },
    []);
    console.log(RTSWORKER);

    if (loading) {
      return <p>Loading...</p>;
    }
    
    return (
        <>
   <section className="workersP_worker_box">
  {RTSWORKER.map((RW) => (
    <div className="information_box" key={RW.id}>
      <NavLink className="worker_link" to={`/workers/${RW.id}`}>
        <div className="worker_info_box">
          <div className="worker_image">
            <img src={RW.image.url} alt={RW.name} />
          </div>
          <h1>{RW.name}</h1>
          <p>{RW.title}</p>
          <div className="action_links">
            <li><IoMail /></li>
            <li><FaLinkedinIn/></li>
          </div>
        </div>
      </NavLink>
    </div>
  ))}
</section>
        </>
      );
}
    export default rtsWorkerCard;
