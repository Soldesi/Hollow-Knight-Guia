
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import SilksongGuide from "./pages/SilksongGuide";
import "./index.css";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/silksong" element={<SilksongGuide />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
