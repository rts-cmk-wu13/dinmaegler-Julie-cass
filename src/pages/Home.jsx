import React from "react";

import Search from "../components/search/search.jsx";
import Danes from "../components/danes/danes";
import Employees from "../components/workers/emoployes.jsx";
import Newsletter from "../components/newsletter/Newsletter.jsx";   
function Home() {
    return(
        <>

<Search />
<Danes />

<Newsletter />
<Employees />
        </>

    )
}
export default Home;