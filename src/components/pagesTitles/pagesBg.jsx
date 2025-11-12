import React from "react";
import "./pagesBg.scss";
import { useLocation } from "react-router-dom";

 function PagesBg() {
  const location = useLocation();
  console.log(location.pathname);
  let title = null;
  switch (location.pathname) {
    case "/List":
    title = "Boliger til salg";
      break;

    case "/Workers":
      title = "Medarbejdere i Roskilde";
      break;

    case "/workers/:id":
      title = "Kontakt en medarbejder";
      break;


    default:
      title = "Velkommen til Din Mægler";
  }

return (
    <section className="pagesBg-container">
      <h1 className="pagesBg-header">{title}</h1>
    </section>
  );
}export default PagesBg;
