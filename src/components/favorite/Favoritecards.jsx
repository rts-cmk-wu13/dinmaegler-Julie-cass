import React from 'react';

function Favoritecards() {
    return (
        <section className="favorite_cards">
            <div class="card">
    
    
    <div class="info">
        <div class="address">Klosterengen 234</div>
        <div class="city">4000 Roskilde</div>
        <div class="type">Villa · Ejerudgift: 4.567 kr.</div>
    </div>

    <div class="details">
        <div class="energy-label">A</div>
        <div>4 værelser · 156 m²</div>
    </div>

    <div class="actions">
        <div class="price">Kr. 4.567.890</div>
        <button>Fjern fra favoritter</button>
    </div>
</div>
        </section>
    );
}
export default Favoritecards;