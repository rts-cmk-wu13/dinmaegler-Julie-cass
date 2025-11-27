import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { SiMinutemailer } from "react-icons/si";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn, FaSkype, FaPhoneAlt, FaRegHeart,  FaHeart  } from "react-icons/fa";


import "./detailworker-scss/Carddetail.scss";
import useWorker from "./useWorker.jsx";

function WorkerInfoCard() {
  const [liked, setLiked] = useState(false);

  const { id } = useParams();
  const { worker, loading } = useWorker(id);

  if (loading) return <p>Loading...</p>;
  if (!worker) return <p>No worker found.</p>;



  return (
    <section className="detailP_worker_box">
      <div className="D_information_box" key={worker.id}>
        <div className="D_worker_info_box">

          <div className="D_worker_image">
            <img src={worker.image?.url} alt={worker.name} />
            <div className="D_action_links">
              <FaInstagram />
              <FaLinkedinIn />
              <FaSkype />
            </div>

          </div>
          <div className="D_worker_text_info">
            <div className="name_heart">
              <p className="name">{worker.name}</p>
              {liked ? (
    <FaHeart className="heart-icon liked" onClick={() => setLiked(false)} />
  ) : (
    <FaRegHeart className="heart-icon" onClick={() => setLiked(true)} />
  )}
             
            </div>
            <p className="title">{worker.title}</p>
              <div className="workercard-underline"></div>

            <p className="phone"><FaPhoneAlt />{worker.phone}</p>
            <p className="email"><SiMinutemailer />{worker.email}</p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default WorkerInfoCard;