import React, { useState, useEffect } from 'react';
import "./chosen.scss";

import { NavLink } from "react-router-dom";


function Chosen() {
  const [properties, setProperties] = useState(null);
  const [loading, setLoading] = useState(true);
  const API_URL = "https://dinmaegler.onrender.com/homes?_limit=4";

  useEffect(() => {
    fetch(API_URL)
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(data => {
        console.log("Data fetched:", data);
        setProperties(data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Fetch error:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <section className="chosen-section">
      <div className="chosen-header">
        <h2>Udvalgte Boliger</h2>
        <p>There are many variations of passages of Lorem Ipsum available but the this in majority have suffered alteration in some</p>
      </div>
      
      <div className="properties-grid">
        {properties && properties.map(property => (
          <NavLink to={`/properties/${property.id}`} key={property.id} className="property-card-link">
          <div key={property.id} className="property-card">
            <div className="property-image">
              <img src={property.images[0].url} alt={property.type} />
            </div>
            <div className="property-info">
              <h3>{property.adress1}</h3>
              <p className="location">{property.postalcode} {property.city}</p>
              <div className="property-type">
                <span>{property.type}</span>
                <span>• Ejerudgift: {property.cost} kr.</span>
              </div>
            <hr />
              <div className="property-price">
                <span data-letter={property.energylabel} className="energy-label">{property.energylabel}</span>
                <span className="property-rooms">{property.rooms} værelser • {property.livingArea} m²</span>
                <span className="price">Kr. {property.price.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </NavLink>
        ))}
      </div>
      <div className="see-more">
        <NavLink to="/List" onClick={() => window.scrollTo(0, 0)}><button className="see-more-btn">Se alle boliger</button></NavLink>
      </div>
    </section>
  );
}

export default Chosen;
