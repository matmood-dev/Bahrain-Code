import { useTranslation } from "react-i18next";
import LangToggle from "./LangToggle";

export default function Navbar() {
  const { t } = useTranslation();
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/70 dark:bg-black/30 border-b border-black/5 dark:border-white/10">
      <div className="mx-auto max-w-7xl px-4 flex items-center justify-between py-3">
        <a href="#" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-brand-500 to-brand-700" />
          <span className="text-lg font-bold">{t("home.brand")}</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a
            className="hover:text-brand-600 dark:hover:text-brand-300"
            href="#home"
          >
            {t("home.nav.home")}
          </a>
          <a
            className="hover:text-brand-600 dark:hover:text-brand-300"
            href="#services"
          >
            {t("home.nav.services")}
          </a>
          <a
            className="hover:text-brand-600 dark:hover:text-brand-300"
            href="#work"
          >
            {t("home.nav.work")}
          </a>
          <a
            className="hover:text-brand-600 dark:hover:text-brand-300"
            href="#blog"
          >
            {t("home.nav.blog")}
          </a>
          <a
            className="hover:text-brand-600 dark:hover:text-brand-300"
            href="#contact"
          >
            {t("home.nav.contact")}
          </a>
        </nav>
        <div className="flex items-center gap-2">
          <LangToggle />
        </div>
      </div>
    </header>
  );
}
