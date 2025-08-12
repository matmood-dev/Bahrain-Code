import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Menu, X } from "lucide-react";
import LangToggle from "./LangToggle";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const dir = i18n.dir?.() || document?.documentElement?.dir || "ltr";

  const navItems = [
    { to: "/", label: t("home.nav.home") },
    { to: "/about", label: t("home.nav.about") },
    { to: "/services", label: t("home.nav.services") },
    { to: "/coming-soon", label: t("home.nav.works") },
    { to: "/start", label: t("home.nav.start-now") },
    { to: "/contact", label: t("home.nav.contact") },
  ];

  const linkBase =
    "px-2 py-1 rounded-md transition hover:text-brand-600 dark:hover:text-brand-300";
  const linkActive =
    "text-brand-600 dark:text-brand-300 font-semibold";

  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/70 dark:bg-black/30 border-b border-black/5 dark:border-white/10">
      <div
        className={`mx-auto max-w-7xl px-4 py-3 flex items-center justify-between ${
          dir === "rtl" ? "flex-row-reverse" : ""
        }`}
      >
        {/* Brand */}
        <Link to="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-brand-500 to-brand-700" />
          <span className="text-lg font-bold">{t("home.brand")}</span>
        </Link>

        {/* Centered nav (desktop) */}
        <nav
          className={`hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-6 text-sm`}
        >
          {navItems.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `${linkBase} ${isActive ? linkActive : ""}`
              }
              end={to === "/"}
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Right controls (desktop) */}
        <div className="hidden md:flex items-center gap-2">
          <LangToggle />
        </div>

        {/* Mobile controls */}
        <div className="md:hidden flex items-center gap-2">
          <LangToggle />
          <button
            aria-label={
              open
                ? t("nav.closeMenu", "Close menu")
                : t("nav.openMenu", "Open menu")
            }
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            className="p-2 rounded-lg border border-black/5 dark:border-white/10 hover:bg-black/[0.03] dark:hover:bg-white/[0.06] focus:outline-none focus:ring-2 focus:ring-brand-500"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden transition-[max-height] duration-300 ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="px-4 pb-3">
          <nav
            className={`flex flex-col gap-1 text-sm ${
              dir === "rtl" ? "items-end" : "items-start"
            }`}
          >
            {navItems.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `w-full ${linkBase} ${isActive ? linkActive : ""} ${
                    dir === "rtl" ? "text-end" : "text-start"
                  }`
                }
                end={to === "/"}
              >
                {label}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
