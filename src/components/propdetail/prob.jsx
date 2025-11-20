import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Prop() {
  const { id } = useParams(); // Get the home ID from the URL

  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_URL = `https://dinmaegler.onrender.com/homes/${id}`;

  

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
  }, [id]); // Refetch if the URL changes

  // Loading state
  if (loading) return <p>Loading...</p>;

  // Error state
  if (error) return <p>Error: {error}</p>;

  // If property is missing
  if (!property) return <p>No property found.</p>;

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
        <div>
        <p><strong>Address:</strong> {property.address2}</p><p><strong>City:</strong> {property.city}</p>
        <section>

        </section>
        <p><strong>Kr.</strong> {property.price}</p>
        </div>
        <hr />
        <div>
            <section>
                <p>{property.id}</p>
                <p>{property.livingspace}</p>
                <p>{property.lotsize}</p>
                <p>{property.rooms}</p>
            </section>
            <section>
                <p>{property.price}</p>
                <p>{property.gross}</p>
                <p>{property.netto}</p>
                <p>{property.payment}</p>
            </section>
            <section>
                <p>{property.basementsize}</p>
                <p>{property.built}</p>
                <p>{property.remodel}</p>
                <p>{property.energylabel}</p>
            </section>
        </div>
        <div>
            <section>
                <p><strong>Beskrivelse:</strong> {property.description}</p>
            </section>
            <section>
                
            </section>
        </div>
      </div>
    </section>
  );
}

export default Prop;
