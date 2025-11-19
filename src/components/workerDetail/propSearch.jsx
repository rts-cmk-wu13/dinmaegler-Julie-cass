import React, { useState } from "react";

function PropSearch() {
    const [query, setQuery] = useState("");

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Search submitted:", query);
    };
    
  return (
   <>
   <div className="detail_search_section">
   <h3>Search Property</h3>
   <hr />

  <form onSubmit={handleSubmit}>
    <input type="text" placeholder="Search..." value={query} onChange={(e) => setQuery(e.target.value)}/>
  </form>
  
   </div>
   </>
  );
} export default PropSearch;