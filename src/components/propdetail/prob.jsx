import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./prob.scss";
import BuildInfoCard from "./probemploye";

import { AiOutlinePicture } from "react-icons/ai";
import { IoLayersOutline } from "react-icons/io5";
import { FiMapPin } from "react-icons/fi";
import { FaRegHeart, FaHeart } from "react-icons/fa";

function Prop() {
  const { id } = useParams();

  // property: fetched single property object
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // modal/gallery state
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("pictures");

  // favorites stored here for detail page — kept as strings to match other components
  const [favorites, setFavorites] = useState([]);

  // load favorites on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem("favorites");
      if (stored) setFavorites(JSON.parse(stored));
    } catch (err) {
      console.error("Failed to load favorites from localStorage", err);
    }
  }, []);

  // persist favorites when they change
  useEffect(() => {
    try {
      localStorage.setItem("favorites", JSON.stringify(favorites));
    } catch (err) {
      console.error("Failed to save favorites to localStorage", err);
    }
  }, [favorites]);

  // helper: check if a property is favorited
  const isFavorited = (propId) => favorites.includes(String(propId));

  // toggle favorite for this page (prevents navigation)
  const toggleFavorite = (e, propId) => {
    e.preventDefault();
    e.stopPropagation();
    const idStr = String(propId);
    setFavorites(prev =>
      prev.includes(idStr) ? prev.filter(f => f !== idStr) : [...prev, idStr]
    );
  };

  const API_URL = `https://dinmaegler.onrender.com/homes/${id}`;

  const fmt = (n) => (n == null ? "" : Number(n).toLocaleString("da-DK"));

  // fetch property on id change
  useEffect(() => {
    setLoading(true);

    fetch(API_URL)
      .then(response => {
        if (!response.ok) {
          throw new Error("Property not found");
        }
        return response.json();
      })
      .then(data => {
        setProperty(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Fetch error:", err);
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!property) return <p>No property found.</p>;

  // gallery content switches between images, floorplan and map
  const renderGalleryContent = () => {
    switch (activeTab) {
      case "pictures":
        return (
          <div className="gallery-content">
            <div className="gallery-grid">
              {property.images?.[2] && (
                <img src={property.images[2].url} alt="Property main" />
              )}
            </div>
          </div>
        );
      case "layers":
        return (
          <div className="gallery-content">
            <div className="gallery-grid">
              {property.images?.[0] && (
                <img src={property.floorplan.url} alt="Floor plan" />
              )}
            </div>
          </div>
        );
      case "map": {
        // build a readable address from available fields
        const address = [
          property.adress1,
          property.adress2,
          property.postalcode ? `${property.postalcode} ${property.city ?? ""}` : property.city
        ].filter(Boolean).join(", ");

        const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;

        return (
          <div className="gallery-content gallery-map">
            <div className="gallery-grid">
              <iframe
                title="property-map"
                className="gallery-map-iframe"
                src={mapSrc}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        );
      }
      default:
        return null;
    }
  };

  return (
    <section className="property-page">
      {/* large hero image */}
      <div className="property-image-wrapper">
        <img
          src={property.images?.[0].url}
          alt={property.type}
          className="property-image"
        />
      </div>

      {/* details + icons including favorite button */}
      <div className="property-details">
        <div className="propertyinnerdetails">
          <h2>{property.adress1} <br /> {property.postalcode} {property.city}</h2>

          <section className="icons">
            {/* buttons open gallery tabs */}
            <button className="piciconbtn">
              <AiOutlinePicture
                className="picicon_img"
                onClick={() => { setActiveTab("pictures"); setGalleryOpen(true); }}
              />
            </button>

            <button className="piciconbtn">
              <IoLayersOutline
                className="picicon_layers"
                onClick={() => { setActiveTab("layers"); setGalleryOpen(true); }}
              />
            </button>

            <button className="piciconbtn">
              <FiMapPin
                className="picicon_pin"
                onClick={() => { setActiveTab("map"); setGalleryOpen(true); }}
              />
            </button>

            {/* Favorite button on detail page */}
            <button
              className="prop-fav-btn"
              onClick={(e) => toggleFavorite(e, property.id)}
              aria-pressed={isFavorited(property.id)}
              title={isFavorited(property.id) ? "Fjern fra favoritter" : "Tilføj til favoritter"}
            >
              {isFavorited(property.id) ? <FaHeart /> : <FaRegHeart />}
            </button>
          </section>

          <h2>Kr. {fmt(property.price)}</h2>
        </div>

        <hr />

        {/* ...more details below (unchanged layout) */}
        <div className="all-thedetails">
          {/* details grouped into columns */}
          <section className="align-together">
            <section>
              <p>Sagsnummer:</p>
              <p>Boligareal:</p>
              <p>Grundareal:</p>
              <p>Rum/værelser:</p>
            </section>
            <section>
              <p>{property.id}</p>
              <p>{property.livingspace} m²</p>
              <p>{property.lotsize} m²</p>
              <p>{property.rooms}</p>
            </section>
          </section>

          <section className="align-together">
            <section>
              <p>Kælder:</p>
              <p>Byggeår:</p>
              <p>Ombygget:</p>
              <p>Energimærke:</p>
            </section>
            <section>
              <p>{property.basementsize}</p>
              <p>{property.built}</p>
              <p>{property.remodel}</p>
              <p>{property.energylabel}</p>
            </section>
          </section>

          <section className="align-together">
            <section>
              <p>udbetaling:</p>
              <p>Brutto ex ejerudgift:</p>
              <p>Netto ex ejerudgift:</p>
              <p>Ejerudgifter:</p>
            </section>
            <section>
              <p>Kr. {fmt(property.price)}</p>
              <p>Kr. {fmt(property.gross)}</p>
              <p>Kr. {fmt(property.netto)}</p>
              <p>Kr. {fmt(property.payment)}</p>
            </section>
          </section>
        </div>

        <div className="lastdescription">
          <section className="property-description">
            <h3>Beskrivelse:</h3> <p>{property.description}</p>
          </section>
          <section>
            <h3><strong>Ansvalig mægler</strong></h3>
            {(() => {
              const agentId = property.agent?.id || property.employee?.id;
              return <BuildInfoCard agentId={agentId} />;
            })()}
          </section>
        </div>
      </div>

      {/* Gallery Modal (opens when galleryOpen true) */}
      {galleryOpen && (
        <div className="gallery-modal-overlay" onClick={() => setGalleryOpen(false)}>
          <div className="gallery-modal" onClick={(e) => e.stopPropagation()}>
            <button className="gallery-close" onClick={() => setGalleryOpen(false)}>✕</button>
            {renderGalleryContent()}
          </div>
        </div>
      )}
    </section>
  );
}

export default Prop;
