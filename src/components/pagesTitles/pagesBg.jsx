import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function pagesBg() {
  const location = useLocation();

  const getpagesTitle = () => {
    switch (location.pathname) {
      
    case "/Workers":
        return "Medarbejdere i Roskilde";
    case "/list":
        return "Boliger til salg";
    case "/workers/:id":
        return "Kontakt en medarbejder";
      default:
        return "Page";
    }
  };
return (
    <section className="p-4 bg-blue-600 text-white flex justify-between">
      <h1 className="text-xl font-bold">{getHeaderTitle()}</h1>
    </section>
  );
}
