import React, { createContext, useContext, useEffect, useState } from "react";

// Create context to hold favorites state across entire app
const FavoritesContext = createContext(null);

export function FavoritesProvider({ children }) {
  // Single source of truth for all favorites (stored as array of id strings)
  const [favorites, setFavorites] = useState([]);

  // Load favorites from localStorage when app mounts
  useEffect(() => {
    try {
      const raw = localStorage.getItem("favorites");
      const parsed = raw ? JSON.parse(raw) : [];
      // Convert all ids to strings to avoid type mismatches
      setFavorites(Array.isArray(parsed) ? parsed.map(String) : []);
    } catch (err) {
      console.error("useFavorites: failed to read localStorage", err);
      setFavorites([]);
    }
  }, []);

  // Persist favorites to localStorage whenever they change
  useEffect(() => {
    try {
      localStorage.setItem("favorites", JSON.stringify(favorites));
    } catch (err) {
      console.error("useFavorites: failed to write localStorage", err);
    }
  }, [favorites]);

  // Add a property to favorites (avoid duplicates)
  const addFavorite = (id) => {
    const idStr = String(id);
    setFavorites((prev) => (prev.includes(idStr) ? prev : [...prev, idStr]));
  };

  // Remove a property from favorites
  const removeFavorite = (id) => {
    const idStr = String(id);
    setFavorites((prev) => prev.filter((f) => f !== idStr));
  };

  // Toggle favorite: add if not exists, remove if exists
  const toggleFavorite = (id) => {
    const idStr = String(id);
    setFavorites((prev) =>
      prev.includes(idStr) ? prev.filter((f) => f !== idStr) : [...prev, idStr]
    );
  };

  // Check if a property is favorited
  const isFavorited = (id) => favorites.includes(String(id));

  // Bundle all functions and state into context value
  const value = { favorites, addFavorite, removeFavorite, toggleFavorite, isFavorited };

  return (
    <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>
  );
}

// Hook to use favorites anywhere in the app
export function useFavorites() {
  const ctx = useContext(FavoritesContext);
  // Throw error if hook used outside of provider
  if (!ctx) throw new Error("useFavorites must be used within FavoritesProvider");
  return ctx;
}