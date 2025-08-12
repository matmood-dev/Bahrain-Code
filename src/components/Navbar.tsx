import { Link } from "react-router-dom";

import { useTranslation } from "react-i18next";
import LangToggle from "./LangToggle";

export default function Navbar() {
  const { t } = useTranslation();
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/70 dark:bg-black/30 border-b border-black/5 dark:border-white/10">
      <div className="mx-auto max-w-7xl px-4 flex items-center justify-between py-3">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-brand-500 to-brand-700" />
          <span className="text-lg font-bold">{t("home.brand")}</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link to="/"
            className="hover:text-brand-600 dark:hover:text-brand-300"
          >
            {t("home.nav.home")}
          </Link>
          <Link
            className="hover:text-brand-600 dark:hover:text-brand-300"
            to="/about"
          >
            {t("home.nav.about")}
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <LangToggle />
        </div>
      </div>
    </header>
  );
}
