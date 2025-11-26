import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./prob.scss";
import BuildInfoCard from "./probemploye";

import { AiOutlinePicture } from "react-icons/ai";
import { IoLayersOutline } from "react-icons/io5";
import { FiMapPin } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";

function Prop() {
  const { id } = useParams();

  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("pictures");

  const API_URL = `https://dinmaegler.onrender.com/homes/${id}`;

  const fmt = (n) => (n == null ? "" : Number(n).toLocaleString("da-DK"));

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
      <div className="property-image-wrapper">
        <img
          src={property.images?.[0].url}
          alt={property.type}
          className="property-image"
        />
      </div>

      <div className="property-details">
        <div className="propertyinnerdetails">
        <h2>{property.adress1} <br /> {property.postalcode} {property.city}</h2>
        <section className="icons">
          <AiOutlinePicture className="picicon_img" onClick={() => { setActiveTab("pictures"); setGalleryOpen(true); }}/>
          <IoLayersOutline className="picicon_layers" onClick={() => { setActiveTab("layers"); setGalleryOpen(true); }}/>
          <FiMapPin className="picicon_pin" onClick={() => { setActiveTab("map"); setGalleryOpen(true); }}/>
          <FaRegHeart className="picicon_heart"/>
        </section>
        <h2>Kr. {fmt(property.price)}</h2>
        </div>

        <hr />

        <div className="all-thedetails">
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
                <h2>Beskrivelse:</h2> <p>{property.description}</p>
            </section>
            <section>
              <h2><strong>Ansvalig mægler</strong></h2>
                {(() => {
                  const agentId =
                    property.agent?.id ||
                    property.employee?.id;

                  return <BuildInfoCard agentId={agentId} />;
                })()}
            </section>
        </div>

      </div>

      {/* Gallery Modal */}
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
