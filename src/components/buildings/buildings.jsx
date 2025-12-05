import React, { useState, useEffect } from "react";
import "./buildings.scss";
import { NavLink, useLocation } from "react-router-dom";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useFavorites } from "../favorite/favoritehook";

function Buildings({ filters }) {
  const { search } = useLocation();
  const params = new URLSearchParams(search);

  const typeSearch = params.get("type")?.toLowerCase() || "";

  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  const { isFavorited, toggleFavorite } = useFavorites();

  const API_URL = "https://dinmaegler.onrender.com/homes";

  // FETCH DATA
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setProperties(data);
        setLoading(false);
      })
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  // FILTER DATA (search + category + price)
  useEffect(() => {
    if (!properties.length) return;

    const filtered = properties.filter((property) => {
      const type = property.type?.toLowerCase() || "";

      if (typeSearch && !type.includes(typeSearch)) return false;

      if (filters.category && property.type !== filters.category) return false;

      if (
        property.price < filters.minPrice ||
        property.price > filters.maxPrice
      )
        return false;

      return true;
    });

    setFilteredProperties(filtered);
  }, [properties, filters, typeSearch]);

  const handleToggleFavorite = (e, id) => {
    e.preventDefault();
    e.stopPropagation();
    toggleFavorite(id);
  };

  if (loading) return <p>Loading...</p>;

  return (
    <section className="building-section">
      <div className="building-grid">
        {filteredProperties.map((p) => {
          const fav = isFavorited(String(p.id));

          return (
            <NavLink
              to={`/properties/${p.id}`}
              key={p.id}
              className="building-card-link"
            >
              <div className="building-card">
                <div className="building-image">
                  <img src={p.images?.[0]?.url} alt={p.type} />

                  <button
                    className="favorite-btn2"
                    onClick={(e) => handleToggleFavorite(e, p.id)}
                  >
                    {fav ? <FaHeart /> : <FaRegHeart />}
                  </button>
                </div>

                <div className="building-info">
                  <h3>{p.adress1}</h3>
                  <p className="building-location">
                    {p.postalcode} {p.city}
                  </p>

                  <div className="building-type">
                    <span>{p.type}</span>
                    <span>• Ejerudgift: {p.cost} kr.</span>
                  </div>

                  <hr />

                  <div className="building-price">
                    <span className="building-energy-label">
                      {p.energylabel}
                    </span>
                    <span className="building-rooms">
                      {p.rooms} værelser • {p.livingArea} m²
                    </span>
                    <span className="building-price">
                      Kr. {p.price.toLocaleString()}
                    </span>
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
