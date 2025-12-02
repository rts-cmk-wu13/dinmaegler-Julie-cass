import React, { useState, useEffect } from 'react';
import "./buildings.scss";
import { NavLink } from "react-router-dom";
import { FaRegHeart, FaHeart } from "react-icons/fa";

function Buildings({ filters }) {
  // properties: raw API data
  const [properties, setProperties] = useState(null);
  // filteredProperties: properties after applying filters prop
  const [filteredProperties, setFilteredProperties] = useState(null);
  const [loading, setLoading] = useState(true);

  // favorites stored locally here (kept as strings)
  const [favorites, setFavorites] = useState([]);
  const API_URL = "https://dinmaegler.onrender.com/homes?";

  // Load favorites from localStorage once (on mount)
  useEffect(() => {
    try {
      const stored = localStorage.getItem("favorites");
      if (stored) setFavorites(JSON.parse(stored));
    } catch (err) {
      console.error("Failed to read favorites from localStorage", err);
    }
  }, []);

  // Persist favorites whenever they change
  useEffect(() => {
    try {
      localStorage.setItem("favorites", JSON.stringify(favorites));
    } catch (err) {
      console.error("Failed to write favorites to localStorage", err);
    }
  }, [favorites]);

  // Fetch all properties on mount
  useEffect(() => {
    fetch(API_URL)
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(data => {
        // store raw data and mark loading false
        setProperties(data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Fetch error:", error);
        setLoading(false);
      });
  }, []);

  // Apply filters (category + min/max price) whenever filters or properties change
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

  // Toggle favorite: add/remove id as string
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
          // convert id to string to compare with favorites store
          const idStr = String(property.id);
          const isFav = favorites.includes(idStr);

          return (
            <NavLink to={`/properties/${property.id}`} key={property.id} className="building-card-link">
              <div className="building-card">
                {/* Image + heart button */}
                <div className="building-image">
                  {/* NOTE: guard property.images in case API returns empty array */}
                  <img src={property.images?.[0]?.url} alt={property.type} />
                  <button
                    className="favorite-btn2"
                    onClick={(e) => toggleFavorite(e, property.id)} // toggles favorite
                    aria-label={isFav ? "Fjern fra favoritter" : "Tilføj til favoritter"}
                    aria-pressed={isFav}
                    title={isFav ? "Fjern fra favoritter" : "Tilføj til favoritter"}
                  >
                    {isFav ? <FaHeart /> : <FaRegHeart />}
                  </button>
                </div>

                {/* Info section shown after the image */}
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
