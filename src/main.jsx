import React from "react";
import ReactDOM from "react-dom/client";

import { AuthProvider } from "../src/context/AuthContext.jsx";
import { RouterProvider } from "react-router-dom";
import Router from "./router.jsx";
import { FavoritesProvider } from "./components/favorite/favoritehook";
import "./app.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <FavoritesProvider>
      <AuthProvider>
      <RouterProvider router={Router} />
      </AuthProvider>
    </FavoritesProvider>
  </React.StrictMode>
);