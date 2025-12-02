import React, { useState, useRef, useEffect } from "react";
import "./buildingsearch.scss";

function Buildingsearch({ onFiltersChange }) {
  // available categories for dropdown
  const categories = ["Villa", "Ejerlejlighed", "Landejendom", "Byhus"];
  const MAX_PRICE = 12000000;
  const STEP = 10000;

  // component local state
  const [open, setOpen] = useState(false); // dropdown open
  const [selected, setSelected] = useState(""); // selected category
  const [minPrice, setMinPrice] = useState(0); // min slider value
  const [maxPrice, setMaxPrice] = useState(MAX_PRICE); // max slider value
  const rootRef = useRef(null);

  // Notify parent of filter changes
  useEffect(() => {
    if (onFiltersChange) onFiltersChange({ category: selected, minPrice, maxPrice });
  }, [selected, minPrice, maxPrice, onFiltersChange]);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClick(e) {
      if (rootRef.current && !rootRef.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  // format numbers for display
  const fmt = (value) =>
    new Intl.NumberFormat("da-DK").format(value) + " kr.";

  // Keep min <= max
  const handleMinChange = (e) => {
    const value = Number(e.target.value);
    if (value <= maxPrice) setMinPrice(value);
  };

  // Keep max >= min
  const handleMaxChange = (e) => {
    const value = Number(e.target.value);
    if (value >= minPrice) setMaxPrice(value);
  };

  return (
    <div className="buildsearch-container">
      <h2 className="LittleSearch-title">Søg efter dit drømmehus</h2>

      <div className="building-search" ref={rootRef}>
        {/* Category dropdown */}
        <div className="filter filter--category">
          <label className="filter__label">Ejendomstype</label>
          <div className={`dropdown ${open ? "is-open" : ""}`}>
            <button
              className="dropbtn"
              type="button"
              onClick={() => setOpen((s) => !s)}
              aria-haspopup="listbox"
              aria-expanded={open}
            >
              {selected || "Ejendomstype"}
              <span className="caret" />
            </button>
            <ul className="dropdown-content" role="listbox">
              {categories.map((cat) => (
                <li
                  key={cat}
                  role="option"
                  aria-selected={selected === cat}
                  tabIndex={0}
                  onClick={() => {
                    setSelected(cat);
                    setOpen(false);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      setSelected(cat);
                      setOpen(false);
                    }
                  }}
                >
                  {cat}
                </li>
              ))}
              <li
                className="clear"
                onClick={() => {
                  setSelected(""); // reset to all
                  setOpen(false);
                }}
                tabIndex={0}
              >
                Alle
              </li>
            </ul>
          </div>
        </div>

        {/* Dual price sliders */}
        <div className="filter filter--price">
          <label className="filter__label">Pris-interval</label>
          <div className="price-row">
            <div className="price-sliders">
              {/* two range inputs layered — min on top, max underneath */}
              <input
                className="price-slider"
                type="range"
                min={0}
                max={MAX_PRICE}
                step={STEP}
                value={minPrice}
                onChange={handleMinChange}
              />
              <input
                className="price-slider"
                type="range"
                min={0}
                max={MAX_PRICE}
                step={STEP}
                value={maxPrice}
                onChange={handleMaxChange}
              />
            </div>

            {/* Display values */}
            <div className="price-values">
              <span className="price-min">{fmt(minPrice)}</span>
              <span className="price-max">{fmt(maxPrice)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Buildingsearch;

