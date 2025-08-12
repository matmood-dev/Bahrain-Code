// src/App.tsx
import { Routes, Route } from "react-router-dom";

import NotFound from "./pages/NotFound";
import ComingSoon from "./pages/ComingSoon";

import Home from "./pages/Home";
import About from "./pages/About/About";
import Services from "./pages/Services/Services";

import { useTranslation } from "react-i18next";

export default function App() {
  const { t } = useTranslation();
  return (
    <Routes>
      <Route path="*" element={<NotFound t={t} />} />
      <Route path="/coming-soon" element={<ComingSoon t={t} />} />

      <Route path="/" element={<Home t={t} />} />
      <Route path="/about" element={<About t={t} />} />
      <Route path="/services" element={<Services t={t} />} />
    </Routes>
  );
}
