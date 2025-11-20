import React from "react";
import { useParams } from "react-router-dom";
import useWorker from "./useWorker.jsx";

import "./detailworker-scss/WorkerDetail.scss";


function WorkerFOrm() {
const { id } = useParams();
  const { worker, loading } = useWorker(id);

  if (loading) return <p>Loading...</p>;
  if (!worker) return <p>No worker found.</p>;




  return (
<>
 <div className="form-card" key={worker.id}>
    
     <h2 className="form-title">Kontakt {worker.name}</h2>
     <div className="name-underline"></div>
 <form className="contact-form">
        
          <div className="row">

            <div className="field" id="top-of-form">
              <label>Navn</label>
              <input className="name-box" type="text" placeholder="Indtast navn" />
            </div>

            <div className="field">
              <label>Email</label>
              <input className="email-box" type="email" placeholder="Indtast email" />
            </div>
          </div>

          <div className="field">
            <label>Emne</label>
            <input className="topic-box" type="text" placeholder="Hvad drejer din henvendelse sig om?" />
          </div>


          <div className="field">
            <label>Besked</label>
            <textarea className="message-box" placeholder="Skriv din besked her…" rows="6"></textarea>
          </div>

          <button type="submit" className="submit-btn">Send besked</button>
        </form>
   </div>
    
</>
  );
}   export default WorkerFOrm;