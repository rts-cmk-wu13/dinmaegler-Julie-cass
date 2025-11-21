import React from "react";
import { useParams } from "react-router-dom";
import useWorker from "./useWorker.jsx";

import "./detailworker-scss/WorkerDetail.scss";
import Theform from "./TheForm.jsx";

import "./detailworker-scss/form.scss";

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
 <Theform />
   </div>
    
</>
  );
}   export default WorkerFOrm;