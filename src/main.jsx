import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import "./index.css";
import App from "./App.jsx";
import About from "./pages/About.jsx";
import Grid from "./pages/Grid.jsx";
import Flex from "./pages/Flex.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/flex" element={<Flex />} />
        <Route path="/grid" element={<Grid />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
