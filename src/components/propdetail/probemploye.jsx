import React, { useState } from "react";
import { SiMinutemailer } from "react-icons/si";
import { FaInstagram, FaLinkedinIn, FaSkype, FaPhoneAlt, FaRegHeart, FaHeart } from "react-icons/fa";

import "./probemploye.scss";
import useAgent from "./useAgent";

function BuildInfoCard({ agentId }) {
  const [liked, setLiked] = useState(false);

  // Quick guard + debug
  if (!agentId) return null;
  console.log("BuildInfoCard agentId:", agentId);

  const { worker, loading } = useAgent(agentId);

  if (loading) return <p>Loading...</p>;
  if (!worker) return <p>No worker found.</p>;

  return (
    <section className="detailP_worker_box">
      <div className="D_information_box" key={worker.id}>
        <div className="D_worker_info_box">
            
          <div className="D_worker_image">
            <img className="worker-image" src={worker.image?.url} alt={worker.name} />
            <div className="D_action_links">
              <FaInstagram />
              <FaLinkedinIn />
              <FaSkype />
            </div>
          </div>

          <div className="D_worker_text_info">
              <p className="name">{worker.name}</p>
            <p className="title">{worker.title}</p>
            <hr className="shortking"/>
            <p className="phone">
              <FaPhoneAlt />
              {worker.phone}
            </p>
            <p className="email">
              <SiMinutemailer />
              {worker.email}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BuildInfoCard;