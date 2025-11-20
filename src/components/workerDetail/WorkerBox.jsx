import React from "react";
import { useParams } from "react-router-dom";
import useWorker from "./useWorker.jsx";
import "./detailworker-scss/Carddetail.scss";
function WorkerBox() {
  const { id } = useParams();
  const { worker, loading } = useWorker(id);

  if (loading) return <p>Loading...</p>;
  if (!worker) return <p>No worker found.</p>;

  return (
    <section className="detail_box">
      <div className="description_worker_box" key={worker.id}>
        <h3>Om {worker.name}</h3>
        <p>{worker.description}</p>
      </div>
    </section>
  );
}

export default WorkerBox;
