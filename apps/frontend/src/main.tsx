import WebDevelopment from "@pages/courses/web-development/web-development";
import Home from "@pages/home/home";
import "@src/main.scss";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses/web-development" element={<WebDevelopment />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
