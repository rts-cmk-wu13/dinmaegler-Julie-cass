import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./pages/Home.jsx";
import List from "./pages/PropList.jsx";
import Detail from "./pages/PropDetails.jsx";
import Workers from "./pages/Workers.jsx";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "Workers",
        element: <Workers />,
      },
      {
        path: "list",
        element: <List />,
      },
      {
        path: "",
        element: <Detail />,
      }, 
    /*   {
        path: "workers/:id",
        element: <Workers />,
      },
  */
    
    
    
    
    ],
  },
]);

export default Router;