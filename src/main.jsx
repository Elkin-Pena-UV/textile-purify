import "./index.css";
import { RouterProvider } from "react-router-dom";
import Router from "./routers/Router.jsx";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={Router} />
  </StrictMode>
);
