import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./prob.scss";
import BuildInfoCard from "./probemploye";
import { AiOutlinePicture } from "react-icons/ai";
import { IoLayersOutline } from "react-icons/io5";
import { FiMapPin } from "react-icons/fi";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useFavorites } from "../favorite/favoritehook";

function Prop() {
  // Get property id from URL params
  const { id } = useParams();
  // Get shared favorites functions from hook
  const { isFavorited, toggleFavorite } = useFavorites();

  // property: single property object from API
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Gallery/modal state
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("pictures"); // 'pictures', 'layers', 'map'

  const API_URL = `https://dinmaegler.onrender.com/homes/${id}`;
  
  // Format numbers as Danish locale with thousands separator
  const fmt = (n) => (n == null ? "" : Number(n).toLocaleString("da-DK"));

  // Fetch property details when id changes
  useEffect(() => {
    setLoading(true);
    fetch(API_URL)
      .then(response => {
        if (!response.ok) throw new Error("Property not found");
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

  // Handle favorite button click
  const toggleFavHandler = (e, propId) => {
    // Prevent unwanted event propagation
    e.preventDefault();
    e.stopPropagation();
    // Toggle favorite in shared store
    toggleFavorite(propId);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!property) return <p>No property found.</p>;

  // Render different content based on active gallery tab
  const renderGalleryContent = () => {
    switch (activeTab) {
      case "pictures":
        // Show property images
        return (
          <div className="gallery-content">
            <div className="gallery-grid">
              {property.images?.[2] && <img src={property.images[2].url} alt="Property main" />}
            </div>
            <section className="gallery-icons">
              <button className="piciconbtn" onClick={() => { setActiveTab("pictures"); }}>
                <AiOutlinePicture className="picicon_img" />
              </button>
              <button className="piciconbtn" onClick={() => { setActiveTab("layers"); }}>
                <IoLayersOutline className="picicon_layers" />
              </button>
              <button className="piciconbtn" onClick={() => { setActiveTab("map"); }}>
                <FiMapPin className="picicon_pin" />
              </button>
              <button 
                className="prop-fav-btn" 
                onClick={(e) => toggleFavHandler(e, property.id)} 
                aria-pressed={isFavorited(property.id)} 
                title={isFavorited(property.id) ? "Fjern fra favoritter" : "Tilføj til favoritter"}
              >
                {isFavorited(property.id) ? <FaHeart /> : <FaRegHeart />}
              </button>
            </section>
          </div>
        );
      case "layers":
        // Show floor plan
        return (
          <div className="gallery-content">
            <div className="gallery-grid">
              {property.images?.[0] && <img src={property.floorplan.url} alt="Floor plan" />}
            </div>
            <section className="gallery-icons">
              <button className="piciconbtn" onClick={() => { setActiveTab("pictures"); }}>
                <AiOutlinePicture className="picicon_img" />
              </button>
              <button className="piciconbtn" onClick={() => { setActiveTab("layers"); }}>
                <IoLayersOutline className="picicon_layers" />
              </button>
              <button className="piciconbtn" onClick={() => { setActiveTab("map"); }}>
                <FiMapPin className="picicon_pin" />
              </button>
              <button 
                className="prop-fav-btn" 
                onClick={(e) => toggleFavHandler(e, property.id)} 
                aria-pressed={isFavorited(property.id)} 
                title={isFavorited(property.id) ? "Fjern fra favoritter" : "Tilføj til favoritter"}
              >
                {isFavorited(property.id) ? <FaHeart /> : <FaRegHeart />}
              </button>
            </section>
          </div>
        );
      case "map": {
        // Show Google Maps embed with property address
        const address = [property.adress1, property.adress2, property.postalcode ? `${property.postalcode} ${property.city ?? ""}` : property.city].filter(Boolean).join(", ");
        const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;
        return (
          <div className="gallery-content gallery-map">
            <div className="gallery-grid">
              <iframe title="property-map" className="gallery-map-iframe" src={mapSrc} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
            <section className="gallery-icons">
              <button className="piciconbtn" onClick={() => { setActiveTab("pictures"); }}>
                <AiOutlinePicture className="picicon_img" />
              </button>
              <button className="piciconbtn" onClick={() => { setActiveTab("layers"); }}>
                <IoLayersOutline className="picicon_layers" />
              </button>
              <button className="piciconbtn" onClick={() => { setActiveTab("map"); }}>
                <FiMapPin className="picicon_pin" />
              </button>
              <button 
                className="prop-fav-btn" 
                onClick={(e) => toggleFavHandler(e, property.id)} 
                aria-pressed={isFavorited(property.id)} 
                title={isFavorited(property.id) ? "Fjern fra favoritter" : "Tilføj til favoritter"}
              >
                {isFavorited(property.id) ? <FaHeart /> : <FaRegHeart />}
              </button>
            </section>
          </div>
        );
      }
      default:
        return null;
    }
  };

  return (
    <section className="property-page">
      {/* Large hero image */}
      <div className="property-image-wrapper">
        <img src={property.images?.[0].url} alt={property.type} className="property-image" />
      </div>

      {/* Details section */}
      <div className="property-details">
        <div className="propertyinnerdetails">
          <h2>{property.adress1} <br /> {property.postalcode} {property.city}</h2>
          
          {/* Icon buttons: pictures, floor plan, map, favorite */}
          <section className="icons">
            <button className="piciconbtn">
              <AiOutlinePicture className="picicon_img" onClick={() => { setActiveTab("pictures"); setGalleryOpen(true); }} />
            </button>
            <button className="piciconbtn">
              <IoLayersOutline className="picicon_layers" onClick={() => { setActiveTab("layers"); setGalleryOpen(true); }} />
            </button>
            <button className="piciconbtn">
              <FiMapPin className="picicon_pin" onClick={() => { setActiveTab("map"); setGalleryOpen(true); }} />
            </button>
            {/* Favorite button on detail page */}
            <button 
              className="prop-fav-btn" 
              onClick={(e) => toggleFavHandler(e, property.id)} 
              aria-pressed={isFavorited(property.id)} 
              title={isFavorited(property.id) ? "Fjern fra favoritter" : "Tilføj til favoritter"}
            >
              {isFavorited(property.id) ? <FaHeart /> : <FaRegHeart />}
            </button>
          </section>
          
          <h2>Kr. {fmt(property.price)}</h2>
        </div>

        <hr />

        {/* Property details grouped in columns */}
        <div className="all-thedetails">
          <section className="align-together">
            <section><p>Sagsnummer:</p><p>Boligareal:</p><p>Grundareal:</p><p>Rum/værelser:</p></section>
            <section><p>{property.id}</p><p>{property.livingspace} m²</p><p>{property.lotsize} m²</p><p>{property.rooms}</p></section>
          </section>

          <section className="align-together">
            <section><p>Kælder:</p><p>Byggeår:</p><p>Ombygget:</p><p>Energimærke:</p></section>
            <section><p>{property.basementsize}</p><p>{property.built}</p><p>{property.remodel}</p><p>{property.energylabel}</p></section>
          </section>

          <section className="align-together">
            <section><p>udbetaling:</p><p>Brutto ex ejerudgift:</p><p>Netto ex ejerudgift:</p><p>Ejerudgifter:</p></section>
            <section><p>Kr. {fmt(property.price)}</p><p>Kr. {fmt(property.gross)}</p><p>Kr. {fmt(property.netto)}</p><p>Kr. {fmt(property.payment)}</p></section>
          </section>
        </div>

        {/* Description and agent info */}
        <div className="lastdescription">
          <section className="property-description"><h3>Beskrivelse:</h3> <p>{property.description}</p></section>
          <section><h3><strong>Ansvalig mægler</strong></h3>{(() => { const agentId = property.agent?.id || property.employee?.id; return <BuildInfoCard agentId={agentId} />; })()}</section>
        </div>
      </div>

      {/* Modal overlay for gallery */}
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
