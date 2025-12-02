import React, { useState, useEffect } from 'react';
import "./buildings.scss";
import { NavLink } from "react-router-dom";
import { FaRegHeart, FaHeart } from "react-icons/fa";

function Buildings({ filters }) {
  const [properties, setProperties] = useState(null);
  const [filteredProperties, setFilteredProperties] = useState(null);
  const [loading, setLoading] = useState(true);
  const [favorites, setFavorites] = useState([]);
  const API_URL = "https://dinmaegler.onrender.com/homes?";

  // load favorites from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem("favorites");
      if (stored) setFavorites(JSON.parse(stored));
    } catch (err) {
      console.error("Failed to read favorites from localStorage", err);
    }
  }, []);

  // persist favorites to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem("favorites", JSON.stringify(favorites));
    } catch (err) {
      console.error("Failed to write favorites to localStorage", err);
    }
  }, [favorites]);

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

  useEffect(() => {
    if (properties) {
      const filtered = properties.filter(property => {
        const matchesCategory = !filters.category || property.type === filters.category;
        const matchesPrice = property.price >= filters.minPrice && property.price <= filters.maxPrice;
        return matchesCategory && matchesPrice;
      });
      setFilteredProperties(filtered);
    }
  }, [filters, properties]);

  const toggleFavorite = (e, propertyId) => {
    // prevent NavLink navigation
    e.preventDefault();
    e.stopPropagation();
    const id = String(propertyId);
    setFavorites(prev =>
      prev.includes(id) ? prev.filter(fid => fid !== id) : [...prev, id]
    );
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <section className="building-section">
      <div className="building-grid">
        {filteredProperties && filteredProperties.map(property => {
          const idStr = String(property.id);
          const isFav = favorites.includes(idStr);

          return (
            <NavLink to={`/properties/${property.id}`} key={property.id} className="building-card-link">
              <div className="building-card">
                <div className="building-image">
                  <img src={property.images[0].url} alt={property.type} />
                  <button
                    className="favorite-btn2"
                    onClick={(e) => toggleFavorite(e, property.id)}
                    aria-label={isFav ? "Fjern fra favoritter" : "Tilføj til favoritter"}
                    aria-pressed={isFav}
                    title={isFav ? "Fjern fra favoritter" : "Tilføj til favoritter"}
                  >
                    {isFav ? <FaHeart /> : <FaRegHeart />}
                  </button>
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
          );
        })}
      </div>
    </section>
  );
}

export default Buildings;
