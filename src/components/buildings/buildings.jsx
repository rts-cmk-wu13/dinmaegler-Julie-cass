import React, { useState, useEffect } from 'react';
import "./buildings.scss";
import { NavLink } from "react-router-dom";


function Buildings() {
  const [properties, setProperties] = useState(null);
  const [loading, setLoading] = useState(true);
  const API_URL = "https://dinmaegler.onrender.com/homes?";

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
    <section className="building-section">
      <div className="building-grid">
        {properties && properties.map(property => (
<NavLink to={`/properties/${property.id}`} key={property.id} className="building-card-link">
          <div key={property.id} className="building-card">
            <div className="building-image">
              <img src={property.images[0].url} alt={property.type} />
            </div>
            <div className="building-info">
              <h3>{property.adress1}</h3>
              <p className="building-location">{property.postalcode} {property.city}</p>
              <div className="building-type">
                <span>{property.type}</span>
                <span>• Ejerudgift: {property.cost} kr.</span>
              </div>
            <hr />
              <div className="building-price">
                <span data-letter={property.energylabel} className="building-energy-label">{property.energylabel}</span>
                <span className="building-rooms">{property.rooms} værelser • {property.livingArea} m²</span>
                <span className="building-price">Kr. {property.price.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </NavLink>
        ))}
      </div>
    </section>
  );
}

export default Buildings;
