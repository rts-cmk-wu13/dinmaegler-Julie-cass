import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Searchform() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/List?type=${query}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="search" 
        placeholder="Search..." 
        value={query} 
        onChange={(e) => setQuery(e.target.value)}
      />
      
      <button type="submit">Search</button>
    </form>
  );
}

export default Searchform;
