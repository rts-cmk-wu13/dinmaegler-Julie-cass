import React, { useState } from "react";
import Buildings from "../components/buildings/buildings.jsx";
import PagesBg from "../components/pagesTitles/pagesBg.jsx"; 
import Buildingsearch from "../components/LIttleSearch/buildingsearch.jsx"; 

function List() {
  const [filters, setFilters] = useState({ category: "", minPrice: 0, maxPrice: 12000000 });

  return (
    <>
      <PagesBg />
      <br />
      <Buildingsearch onFiltersChange={setFilters} />
      <Buildings filters={filters} />
    </>
  );
}

export default List;