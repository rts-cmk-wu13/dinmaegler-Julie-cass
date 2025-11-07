import React from "react";

import Search from "../components/search/search.jsx";
import Danes from "../components/danes/danes";
import Chosen from "../components/chosen/chosen.jsx";   
import Newsletter from "../components/newsletter/Newsletter.jsx";   
import Employees from "../components/workers/emoployes.jsx";
import Ad from "../components/ad/Ad.jsx";
function Home() {
    return(
        <>

<Search />
<Danes />
<Chosen />
<Newsletter />
<Employees />
<Ad/>
        </>

    )
}
export default Home;