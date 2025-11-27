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
    <section className="detailP_worker_box2">
      <div className="D_information_box2" key={worker.id}>
        <div className="D_worker_info_box2">
            
          <div className="D_worker_image2">
            <img className="worker-image2" src={worker.image?.url} alt={worker.name} />
            <div className="D_action_links2">
              <FaInstagram />
              <FaLinkedinIn />
              <FaSkype />
            </div>
          </div>

          <div className="D_worker_text_info2">
              <p className="name2">{worker.name}</p>
            <p className="title2">{worker.title}</p>
            <hr className="shortking2"/>
            <p className="phone2">
              <FaPhoneAlt />
              {worker.phone}
            </p>
            <p className="email2">
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