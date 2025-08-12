// src/layouts/DefaultLayout.tsx
import Navbar from "../components/Navbar";
import GoToTop from "../components/GoToTop"; // <-- import our new button
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import Footer from "../components/Footer";

interface DefaultLayoutProps {
  children: React.ReactNode;
}

export default function DefaultLayout({ children }: DefaultLayoutProps) {
  const { i18n } = useTranslation();

  // Automatically switch direction
  useEffect(() => {
    const dir = i18n.language === "ar" ? "rtl" : "ltr";
    document.documentElement.dir = dir;
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <div
      className="min-h-screen flex flex-col"
      dir={i18n.language === "ar" ? "rtl" : "ltr"}
    >
      {/* Navbar */}
      <Navbar />

      {/* Main content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <Footer />

      {/* Go to Top button */}
      <GoToTop />
    </div>
  );
}
