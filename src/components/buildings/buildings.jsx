import React, { useState, useEffect } from 'react';
import "./buildings.scss";
import { NavLink } from "react-router-dom";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useFavorites } from "../favorite/favoritehook";

function Buildings({ filters }) {
  // properties: all properties fetched from API
  const [properties, setProperties] = useState(null);
  // filteredProperties: properties after applying category & price filters
  const [filteredProperties, setFilteredProperties] = useState(null);
  const [loading, setLoading] = useState(true);
  
  // Get shared favorites state and functions from hook
  // All components using this hook share the same favorites state
  const { favorites, toggleFavorite, isFavorited } = useFavorites();
  
  const API_URL = "https://dinmaegler.onrender.com/homes?";

  // Fetch all properties on component mount
  useEffect(() => {
    fetch(API_URL)
      .then(response => {
        if (!response.ok) throw new Error("Network response was not ok");
        return response.json();
      })
      .then(data => {
        // Store raw property data
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
        // Check if category matches (or no filter selected)
        const matchesCategory = !filters.category || property.type === filters.category;
        // Check if price is within min/max range
        const matchesPrice = property.price >= filters.minPrice && property.price <= filters.maxPrice;
        // Return true only if both conditions met
        return matchesCategory && matchesPrice;
      });
      setFilteredProperties(filtered);
    }
  }, [filters, properties]);

  // Handle favorite button click
  const handleToggleFavorite = (e, propertyId) => {
    // Prevent NavLink navigation when clicking heart button
    e.preventDefault();
    e.stopPropagation();
    // Toggle favorite state (add or remove from favorites)
    toggleFavorite(propertyId);
  };

  if (loading) return <p>Loading...</p>;

  return (
    <section className="building-section">
      <div className="building-grid">
        {filteredProperties && filteredProperties.map(property => {
          // Convert id to string for consistency with favorites store
          const idStr = String(property.id);
          // Check if this property is in favorites
          const isFav = isFavorited(idStr);

          return (
            <NavLink to={`/properties/${property.id}`} key={property.id} className="building-card-link">
              <div className="building-card">
                {/* Image with heart button top-right */}
                <div className="building-image">
                  <img src={property.images?.[0]?.url} alt={property.type} />
                  <button
                    className="favorite-btn2"
                    onClick={(e) => handleToggleFavorite(e, property.id)}
                    aria-label={isFav ? "Fjern fra favoritter" : "Tilføj til favoritter"}
                    aria-pressed={isFav}
                    title={isFav ? "Fjern fra favoritter" : "Tilføj til favoritter"}
                  >
                    {/* Show filled heart if favorited, outline if not */}
                    {isFav ? <FaHeart /> : <FaRegHeart />}
                  </button>
                </div>

                {/* Property info shown after image */}
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
