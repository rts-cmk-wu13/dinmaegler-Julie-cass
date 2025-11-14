import React from "react";
import RtsWorkerCard from "../components/employs/rtsEmploys.jsx"; // Corrected import
import PagesBg from "../components/pagesTitles/pagesBg.jsx";  

function Workers() {
    return (
        <>
            <PagesBg />
        <div classname="workercard-box">
            <RtsWorkerCard />
            </div>
        </>
    );
}

export default Workers;