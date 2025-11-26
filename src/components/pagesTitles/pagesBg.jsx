import React from "react";
import "./pagesBg.scss";
import { useLocation, Link } from "react-router-dom";

function PagesBg() {
  const location = useLocation();
  const path = location.pathname;

  // Title logic
  let title = "";
  switch (path) {
    case "/Contact":
      title = "Kontakt os";
      break;
    case "/List":
      title = "Boliger til salg";
      break;
    case "/Workers":
      title = "Medarbejdere i Roskilde";
      break;
    case "/Login":
      title = "Account Login";
      break;
    case "/makeuser":
      title = "Opret Bruger";
      break;
    default:
      title = "Velkommen til Din Mægler";
  }

  
  const breadcrumbName = title;
  
  return (
    <section className="pagesBg-container">
      <div className="pagesBg-content">
        <h1 className="pagesBg-header">{title}</h1>

        <div className="breadcrumb">
          <Link to="/">Home</Link>
          <span>|</span>
          <span className="breadcrumcName">{breadcrumbName}</span>
        </div>
      </div>
    </section>
  );
}

export default PagesBg;
