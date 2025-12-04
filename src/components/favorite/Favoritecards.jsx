import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import "./favoritecards.scss";
import { useFavorites } from "./favoritehook";

const API_URL = "https://dinmaegler.onrender.com/homes";

function Favoritecards() {
  // Get favorites state and functions from shared hook
  const { favorites, removeFavorite, isFavorited } = useFavorites();
  
  // favProperties: filtered list of properties that are in favorites
  const [favProperties, setFavProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  // When favorites array changes, fetch all properties and filter to favorites only
  useEffect(() => {
    // If no favorites, clear the list
    if (!favorites || favorites.length === 0) {
      setFavProperties([]);
      setLoading(false);
      return;
    }

    setLoading(true);
    
    // Fetch all properties from API
    fetch(API_URL)
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => {
        // Create a Set of favorite ids for fast lookup
        const favSet = new Set(favorites.map(String));
        // Filter properties to only those in favorites
        const filtered = (data || []).filter((p) => favSet.has(String(p.id)));
        setFavProperties(filtered);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setFavProperties([]);
        setLoading(false);
      });
  }, [favorites]); // Re-run when favorites changes

  if (loading) return <p>Indlæser favoritter…</p>;

  // Show empty state if no favorites
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
        <NavLink to={`/properties/${prop.id}`} key={prop.id} className="fav-card-link">
          <article className="fav-card" role="article" aria-labelledby={`fav-title-${prop.id}`}>
            {/* Image area with heart button */}
            <div className="fav-image">
              <img src={prop.images?.[0]?.url} alt={prop.type || "Ejendom"} loading="lazy" />
              {/* Heart button in top-right of image */}
            </div>

            {/* Main content: left side = text, right side = price & action button */}
            <div className="fav-main">
              <div className="fav-left">
                <h3 id={`fav-title-${prop.id}`} className="fav-title">{prop.adress1}</h3>
                <p className="fav-location">{prop.postalcode} {prop.city}</p>
                <div className="fav-type">
                  <strong>{prop.type}</strong>
                  <span className="dot">•</span>
                  <span className="fav-cost">Ejerudgift: {Number(prop.cost || 0).toLocaleString("da-DK")} kr.</span>
                </div>
              </div>

              {/* Right column: energy badge, rooms, price, remove button */}
              <div className="fav-right">
                <div className="fav-meta-row">
                  <span className="energy-badge" data-letter={prop.energylabel}>{prop.energylabel}</span>
                  <span className="fav-rooms">{prop.rooms} værelser • {prop.livingArea} m²</span>
                  <div className="fav-price">Kr. {Number(prop.price || 0).toLocaleString("da-DK")}</div>
                </div>
                <div className="fav-price-row">
                  {/* Secondary button to remove from favorites */}
                  <button
                    className="fav-action-btn"
                    onClick={(e) => { 
                      e.preventDefault();
                      e.stopPropagation();
                      removeFavorite(prop.id);
                    }}
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