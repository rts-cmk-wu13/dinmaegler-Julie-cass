import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../LittleSearch/littlesearch.scss";
import "./favoritecards.scss";
import { useFavorites } from "./favoritehook.jsx";
import Favesearch from "../LittleSearch/favesearch.jsx";

const API_URL = "https://dinmaegler.onrender.com/homes";

function Favoritecards() {
  const { favorites, removeFavorite } = useFavorites();

  const [favProperties, setFavProperties] = useState([]);
  const [displayedFavorites, setDisplayedFavorites] = useState([]);
  const [loading, setLoading] = useState(true);

  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (!favorites.length) {
      setFavProperties([]);
      setDisplayedFavorites([]);
      setLoading(false);
      return;
    }

    setLoading(true);

    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        const favSet = new Set(favorites.map(String));
        const filtered = data.filter((p) => favSet.has(String(p.id)));

        setFavProperties(filtered);
        setDisplayedFavorites(filtered); // initial state
        setLoading(false);
      });
  }, [favorites]);

  //  Search filtering
useEffect(() => {
  const q = searchQuery.toLowerCase();

  const filtered = favProperties.filter((p) => {
    const type = p.type?.toLowerCase() || "";
    const city = p.city?.toLowerCase() || "";
    const adress1 = p.adress1?.toLowerCase() || "";

    return (
      type.includes(q) ||
      city.includes(q) ||
      adress1.includes(q)
    );
  });

  setDisplayedFavorites(filtered);
}, [searchQuery, favProperties]);


  if (loading) return <p>Indlæser favoritter…</p>;

  return (
    <section className="favorite_cards">

      {/*  SØGEFORM TIL FAVORITTER */}
      
      <Favesearch onSearch={setSearchQuery} />
      <hr className="favehr"/>
      {displayedFavorites.length === 0 ? (
        <p className="Ingen">Ingen favoritter matchede søgningen.</p>
      ) : (
        displayedFavorites.map((prop) => (
          <NavLink to={`/properties/${prop.id}`} key={prop.id} className="fav-card-link">
            <article className="fav-card">
              <div className="fav-image">
                <img src={prop.images?.[0]?.url} alt={prop.type} />
              </div>

              <div className="fav-main">
                <div className="fav-left">
                  <h3 className="fav-title">{prop.adress1}</h3>
                  <p className="fav-location">{prop.postalcode} {prop.city}</p>
                  <div className="fav-type">
                    <strong>{prop.type}</strong>
                  </div>
                </div>

                <div className="fav-right">
                  <div className="fav-meta-row">
                    <span>{prop.rooms} værelser</span>
                    <span>{prop.livingArea} m²</span>
                    <span className="fav-price">Kr. {prop.price.toLocaleString()}</span>
                  </div>
                  <button
                    className="fav-action-btn"
                    onClick={(e) => {
                      e.preventDefault();
                      removeFavorite(prop.id);
                    }}
                  >
                    Fjern
                  </button>
                </div>
              </div>
            </article>
          </NavLink>
        ))
      )}
    </section>
  );
}

export default Favoritecards;
