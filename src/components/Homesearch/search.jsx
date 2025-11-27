import React from "react";
import SearchForm from "./searchform.jsx";
import "./search.scss";

function Search(){
    return(
        <>
        <section className="search_bg_box">
        <h1>Søg efter din drømmebolig</h1>

            <div className="searchform_bg"> 
                <h3>Søg blandt 158 boliger til salg i 74 butikker </h3>

                <div className="search_box">
                <p>Hvad skal din næste bolig indeholde</p>
<SearchForm/>
</div>
            </div>
            
        </section>
        </>
    )
} export default Search;