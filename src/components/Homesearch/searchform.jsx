import React, { useState } from "react";

function SearchForm() {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Search submitted:", query);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="search" placeholder="Search..." value={query} onChange={(e) => setQuery(e.target.value)}/>
      <button type="submit" >
        Search
      </button>
    </form>
  );
}
export default SearchForm;
