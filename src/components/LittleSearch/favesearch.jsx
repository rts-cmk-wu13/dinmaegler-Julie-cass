import React, { useState } from 'react';
import "./littlesearch.scss";
import { FaSearch } from "react-icons/fa";

function Favesearch({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);  // 🔥 send søgeteksten op til Favoritecards
  };

  return (
    <form className="searchbar-form2" onSubmit={handleSubmit}>
      <FaSearch className="search-icon2" aria-hidden="true" />

      <input
        type="search"
        placeholder="Søg i favoritter (fx villa, by, adresse...)"
        value={query}
        onChange={(e) => {
          const value = e.target.value;
          setQuery(value);
          onSearch(value); // live filtering
        }}
        aria-label="Search"
      />
    </form>
  );
}

export default Favesearch;
