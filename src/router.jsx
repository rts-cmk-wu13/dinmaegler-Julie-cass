import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./Layout.jsx";
import Home from "./pages/Home.jsx";
import List from "./pages/PropList.jsx";
import Detail from "./pages/PropDetails.jsx";
import Workers from "./pages/Workers.jsx";

import Worker from "./pages/worker.jsx";

import Contact from "./pages/Contact.jsx";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "workers",  // must be lowercase
        element: <Workers />,
      },
      {
        path: "list",
        element: <List />,
      },
      {
        path: "properties/:id",
        element: <Detail />,
      },
      {
        path: "workers/:id", // worker detail
        element: <Worker />,
      },{
        path: "Contact",
        element: <Contact />,
      },
    ],
  },
]);


 
export default Router;
