import React, { useState } from "react";

import { FaSearch } from "react-icons/fa";

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
  <div className="search-underline"></div>

  <form className="searchbar-form" onSubmit={handleSubmit}>
    <FaSearch className="search-icon" aria-hidden="true" />
    <input type="search" placeholder="Search..." value={query} onChange={(e) => setQuery(e.target.value)}  aria-label="Search"/>
  </form>
  
   </div>
   </>
  );
} export default PropSearch;