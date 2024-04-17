import React from "react";
import ReactDOM from "react-dom/client";
import App from "./routes/App.jsx";
import Home from "./routes/Home.jsx";
import Speech from "./routes/Speech.jsx";
import Pricing from "./routes/Pricing.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/home", element: <Home /> },
      {
        path: "/speech",
        element: <Speech />,
      },
      {
        path: "/pricing",
        element: <Pricing />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
