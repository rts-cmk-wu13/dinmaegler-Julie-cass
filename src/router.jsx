import React from "react";
import { createBrowserRouter } from "react-router-dom";

import Layout from "./Layout.jsx";
import ErrorLayout from "./ErrorLayout.jsx";
import ErrorPage from "./pages/Error.jsx";

import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import MakeUserPage from "./pages/MakeUser.jsx";
import List from "./pages/PropList.jsx";
import Workers from "./pages/Workers.jsx";
import Favorite from "./pages/Favorite.jsx";
import Detail from "./pages/PropDetails.jsx";
import Worker from "./pages/worker.jsx";
import Contact from "./pages/Contact.jsx";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,   // MENU + FOOTER
    children: [
      { index: true, element: <Home /> },
      { path: "login", element: <Login /> },
      { path: "makeuser", element: <MakeUserPage /> },
      { path: "workers", element: <Workers /> },
      { path: "list", element: <List /> },
      { path: "properties/:id", element: <Detail /> },
      { path: "workers/:id", element: <Worker /> },
      { path: "contact", element: <Contact /> },
      { path: "favorite", element: <Favorite /> },
    ],
  },

  // ⭐ ERROR PAGE OUTSIDE MAIN LAYOUT
  {
    element: <ErrorLayout />, // MENU ONLY (NO FOOTER)
    children: [
      { path: "*", element: <ErrorPage /> }
    ]
  }
]);

export default Router;