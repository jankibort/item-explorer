import React from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "@tanstack/react-router";
import { getRouter } from "./router";
import "./styles.css";

const router = getRouter();

const appRoot = createRoot(document.getElementById("root")!);
appRoot.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

// debug overlays removed
