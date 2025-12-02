import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import "./favoritecards.scss";

const API_URL = "https://dinmaegler.onrender.com/homes";

function Favoritecards() {
  // favorites: array of id strings read from localStorage
  const [favorites, setFavorites] = useState([]);
  // favProperties: property objects that match favorites
  const [favProperties, setFavProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  // On mount: read favorites from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem("favorites");
      const favs = stored ? JSON.parse(stored) : [];
      setFavorites(Array.isArray(favs) ? favs : []);
    } catch (err) {
      console.error("Failed to read favorites from localStorage", err);
      setFavorites([]);
    }
  }, []);

  // When favorites changes: fetch all homes and filter to favorites
  useEffect(() => {
    if (!favorites || favorites.length === 0) {
      // no favorites -> clear list
      setFavProperties([]);
      setLoading(false);
      return;
    }

    setLoading(true);
    fetch(API_URL)
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => {
        // convert favorites to strings to avoid type issues
        const favSet = new Set(favorites.map(String));
        const filtered = (data || []).filter((p) => favSet.has(String(p.id)));
        setFavProperties(filtered);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setFavProperties([]);
        setLoading(false);
      });
  }, [favorites]);

  // removeFavorite: update localStorage and local state
  const removeFavorite = (e, propId) => {
    // prevent NavLink navigation when clicking button
    e.preventDefault();
    e.stopPropagation();
    const idStr = String(propId);
    const next = favorites.filter((f) => f !== idStr);
    try {
      localStorage.setItem("favorites", JSON.stringify(next));
    } catch (err) {
      console.error("Failed to write favorites to localStorage", err);
    }
    // optimistic UI update
    setFavorites(next);
    setFavProperties((prev) => prev.filter((p) => String(p.id) !== idStr));
  };

  if (loading) return <p>Indlæser favoritter…</p>;

  if (!favProperties || favProperties.length === 0) {
    return (
      <section className="favorite_cards">
        <p>Du har ingen favoritter.</p>
      </section>
    );
  }

  return (
    <section className="favorite_cards">
      {favProperties.map((prop) => (
        <NavLink
          to={`/properties/${prop.id}`}
          key={prop.id}
          className="fav-card-link"
        >
          <article
            className="fav-card"
            role="article"
            aria-labelledby={`fav-title-${prop.id}`}
          >
            {/* Image area with top-right heart button */}
            <div className="fav-image">
              <img
                src={prop.images?.[0]?.url}
                alt={prop.type || "Ejendom"}
                loading="lazy"
              />
              <button
                className="fav-remove-btn"
                onClick={(e) => removeFavorite(e, prop.id)} // removes from favorites
                aria-label="Fjern fra favoritter"
                title="Fjern fra favoritter"
              >
                <FaHeart />
              </button>
            </div>

            {/* Main content: left = text, right = meta & actions */}
            <div className="fav-main">
              <div className="fav-left">
                <h3 id={`fav-title-${prop.id}`} className="fav-title">
                  {prop.adress1}
                </h3>
                <p className="fav-location">
                  {prop.postalcode} {prop.city}
                </p>
                <div className="fav-type">
                  <strong>{prop.type}</strong>
                  <span className="dot">•</span>
                  <span className="fav-cost">
                    Ejerudgift: {Number(prop.cost || 0).toLocaleString("da-DK")} kr.
                  </span>
                </div>
              </div>

              <div className="fav-right">
                <div className="fav-meta-row">
                  <span className="energy-badge" data-letter={prop.energylabel}>
                    {prop.energylabel}
                  </span>
                  <span className="fav-rooms">
                    {prop.rooms} værelser • {prop.livingArea} m²
                  </span>
                </div>

                <div className="fav-price-row">
                  <div className="fav-price">
                    Kr. {Number(prop.price || 0).toLocaleString("da-DK")}
                  </div>
                  {/* Secondary remove button (same behavior) */}
                  <button
                    className="fav-action-btn"
                    onClick={(e) => removeFavorite(e, prop.id)}
                    aria-label="Fjern fra favoritter"
                  >
                    Fjern fra favoritter
                  </button>
                </div>
              </div>
            </div>
          </article>
        </NavLink>
      ))}
    </section>
  );
}

export default Favoritecards;