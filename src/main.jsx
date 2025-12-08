import React from "react";
import ReactDOM from "react-dom/client";

import { AuthProvider } from "../src/context/AuthContext.jsx";
import { RouterProvider } from "react-router-dom";
import Router from "./router.jsx";
import { FavoritesProvider } from "./components/favorite/favoritehook";
import "./App.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
  <AuthProvider>
  <FavoritesProvider>
    <RouterProvider router={Router} />
  </FavoritesProvider>
</AuthProvider>
  </React.StrictMode>
);