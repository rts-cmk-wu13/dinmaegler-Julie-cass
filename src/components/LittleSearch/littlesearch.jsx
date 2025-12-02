import React from 'react';
import { useState } from 'react';

import "./littlesearch.scss";
import { FaSearch } from "react-icons/fa";

function Littlesearch() {

const [query, setQuery] = useState("");
    
        const handleSubmit = (e) => {
          e.preventDefault();
          console.log("Search submitted:", query);
        };

    return (

        <form className="searchbar-form2" onSubmit={handleSubmit}>
    <FaSearch className="search-icon2" aria-hidden="true" />
    <input type="search" placeholder="Search..." value={query} onChange={(e) => setQuery(e.target.value)}  aria-label="Search"/>
  </form>
    );
}
export default Littlesearch;