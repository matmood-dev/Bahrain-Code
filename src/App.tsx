// src/App.tsx
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About/About";

import { useTranslation } from "react-i18next";


export default function App() {
  const { t } = useTranslation();
  return (
    <Routes>
      <Route path="/" element={<Home t={t}/>} />
      <Route path="/about" element={<About t={t} />} />
      {/* future:
      <Route path="/work" element={<Work />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
      */}
    </Routes>
  );
}
