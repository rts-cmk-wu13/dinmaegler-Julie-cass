import React from "react";
import "./detailworker-scss/workerDetail.scss";

import PropSearch from "./propSearch.jsx";
import DetailAd from "./detailAd.jsx";

import WorkerInfoCard from "./WorkerInfoCard.jsx";
import WorkerBox from "./WorkerBox.jsx";
import WorkerFOrm from "./WorkerFOrm.jsx";


function WorkerDetail() {

  return (
    <section className="DetailWorker_p">

        <div className="leftSide">
     <WorkerInfoCard />
      <WorkerBox />
<WorkerFOrm />
      </div>

      <div className="rightSide">
<PropSearch />
<DetailAd />
        </div>
    </section>
  );
}

export default WorkerDetail;