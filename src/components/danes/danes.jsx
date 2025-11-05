import React from 'react';
import DanesImage from '../../assets/Image.png'; 
import './danes.sass';



function Danes() {
  return (
    <>
    <section className="danes-section">
      <div className="danes-container">
        <div className="danes-content">
          <div className="danes-header">

            <div className="danes-text">
              <h2>Vi har fulgt danskerne hjem i snart 4 årtier</h2>
              <p>Det syntes vi siger noget om os!</p>
              <p>
                It is a long established fact that a reader will be distracted by the
                readable content of a page when looking at its layout. The point of
                using Lorem Ipsum is that has a normal distribution..
              </p>
            </div>

            <div className="danes-image">
              <img src={DanesImage} alt="Family with house frame" />
            </div>
          </div>
          <div className="danes-stats">
            <div className="stat-item">
              <h3>38+</h3>
              <p>års mengler-erfaring</p>
            </div>
            <div className="stat-item">
              <h3>4829</h3>
              <p>boliger solgt</p>
            </div>
            <div className="stat-item">
              <h3>158</h3>
              <p>boliger til salg</p>
            </div>
          </div>

          <div className="danes-features">
            <div className="feature">
              <h4>Bestil et salgstjek</h4>
              <p>Med et Din Mægler Salgstjek bliver du opdateret på værdien af din bolig.</p>
            </div>
            <div className="feature">
              <h4>74 butikker</h4>
              <p>Din Din Mægler er altid tæt på dig. Vi har 74 butikker, som er fordelt over i Danmark.</p>
            </div>
            <div className="feature">
              <h4>Tilmeld køberkartotek</h4>
              <p>Når du er tilmeldt vores køberkartotek, bliver du kontaktet inden en ny bolig bliver annonceret.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Danes;