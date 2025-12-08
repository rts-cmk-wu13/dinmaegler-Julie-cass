import React from "react";
// ...existing code...
// ensure this matches the actual filename (case-sensitive)
import WorkerDetail from "../components/workerDetail/WorkerDetail.jsx";
import PagesBg from "../components/pagesTitles/pagesBg.jsx";  

function Worker() {
  return (
    <>
      <PagesBg />
      <WorkerDetail />
    </>
  );
}
export default Worker;