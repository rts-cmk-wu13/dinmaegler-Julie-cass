import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import { IoMail } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa";

import "./employes.scss";

function WorkerCard() {
  const [WORKER, setWORKER] = useState(null);
  const [loading, setLoading] = useState(true);
  const API_URL = "https://dinmaegler.onrender.com/agents?_limit=3";

  useEffect(() => {
    fetch(API_URL)
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(data => {
        setWORKER(data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Fetch error:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <section className="homeP_worker_box">
      {WORKER.map((worker) => (
        <div className="information_box" key={worker.id}>
         
          <NavLink className="worker_link" to={`/workers/${worker.id}`} onClick={() => window.scrollTo(0, 0)}>
            <div className="worker_info_box">
              <div className="worker_image">
                <img src={worker.image?.url} alt={worker.name} />
              </div>
              <h1>{worker.name}</h1>
              <p>{worker.title}</p>
              <div className="action_links">
                <li><IoMail /></li>
                <li><FaLinkedinIn /></li>
              </div>
            </div>
          </NavLink>

        </div>
      ))}
    </section>
  );
}

export default WorkerCard;
