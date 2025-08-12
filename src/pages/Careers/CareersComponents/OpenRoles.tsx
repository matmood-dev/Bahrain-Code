// src/pages/Careers/CareersComponents/OpenRoles.tsx
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Briefcase, MapPin, Clock } from "lucide-react";
import { ROLES } from "../roles"; // your existing shared roles array

export default function OpenRoles({ t }: TProp) {
  const { i18n } = useTranslation();
  const dir = i18n.language === "ar" ? "rtl" : "ltr";

  return (
    <section className="relative mx-auto max-w-7xl px-4 py-16" dir={dir}>
      <div className="max-w-3xl mx-auto text-center">
        <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium tracking-wide border border-white/10 bg-white/5">
          {t("careers.roles.badge")}
        </span>
        <h2 className="mt-3 text-3xl md:text-4xl font-extrabold">
          {t("careers.roles.title")}
        </h2>
        <p className="mt-3 text-[rgb(var(--muted))]">
          {t("careers.roles.subtitle")}
        </p>
      </div>

      {/* Roles grid */}
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {ROLES.map((r) => (
          <article
            key={r.id}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 h-full flex flex-col"
          >
            <header className="flex items-center justify-between gap-3">
              <h3 className="text-lg font-semibold">{t(r.titleKey)}</h3>
              <span className="text-xs rounded-full border border-white/10 bg-white/5 px-2 py-0.5">
                {t(r.deptKey)}
              </span>
            </header>

            <p className="mt-3 text-sm text-[rgb(var(--muted))]">
              {t(r.summaryKey)}
            </p>

            <div className="mt-4 flex flex-wrap gap-2 text-xs">
              {r.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full px-2 py-1 border border-white/10 bg-white/5"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-4 flex items-center gap-4 text-xs text-[rgb(var(--muted))]">
              <div className="inline-flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                {t(r.locationKey)}
              </div>
              <div className="inline-flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {t(r.typeKey)}
              </div>
            </div>

            <div className="mt-6 flex justify-between items-center">
              <div className="inline-flex items-center gap-2 text-sm">
                <Briefcase className="h-4 w-4 text-brand-500" />
                <span>{t("careers.roles.applyPrompt")}</span>
              </div>
              <Link
                to={`/careers/${r.id}`}
                className="inline-flex items-center rounded-xl px-3 py-2 text-white bg-gradient-to-br from-brand-500 to-brand-700 shadow hover:opacity-95 text-sm"
              >
                {t("careers.roles.apply")}
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
