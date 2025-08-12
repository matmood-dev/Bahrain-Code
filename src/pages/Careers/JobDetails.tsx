import DefaultLayout from "../../layouts/DefaultLayout";
import { useParams, Link, Navigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  Briefcase,
  MapPin,
  Clock,
  ArrowLeft,
  CheckCircle2,
} from "lucide-react";
import { ROLES } from "./roles";

export default function JobDetails({ t }: TProp) {
  const { id } = useParams();
  const { i18n } = useTranslation();
  const dir = i18n.language === "ar" ? "rtl" : "ltr";

  const role = ROLES.find((r) => r.id === id);

  if (!role) {
    // If not found, you can navigate back to careers or show your 404
    return <Navigate to="/careers" replace />;
  }

  const title = t(role.titleKey);
  const dept = t(role.deptKey);
  const location = t(role.locationKey);
  const type = t(role.typeKey);
  const summary = t(role.summaryKey);

  // If no external applyUrl, build a link to /apply?role=...
  const internalApplyHref = `/apply?role=${encodeURIComponent(title)}`;

  return (
    <DefaultLayout>
      <section className="relative overflow-hidden" dir={dir}>
        <div className="pointer-events-none absolute inset-0 opacity-60 blur-3xl -z-10">
          <div className="absolute -top-24 -end-24 h-72 w-72 rounded-full bg-brand-500/30" />
          <div className="absolute bottom-0 -start-16 h-80 w-80 rounded-full bg-brand-700/20" />
        </div>

        <div className="mx-auto max-w-5xl px-4 py-10 md:py-16">
          {/* Back link */}
          <div className="mb-6">
            <Link
              to="/careers"
              className="inline-flex items-center gap-2 text-sm hover:opacity-80"
            >
              <ArrowLeft className="h-4 w-4" />
              {t("careers.details.back", "Back to Careers")}
            </Link>
          </div>

          {/* Header */}
          <header className="mb-6">
            <div className="flex flex-wrap gap-3 items-center">
              <h1 className="text-3xl md:text-4xl font-extrabold">{title}</h1>
              <span className="text-xs rounded-full border border-white/10 bg-white/5 px-2 py-0.5">
                {dept}
              </span>
            </div>
            <div className="mt-3 flex flex-wrap gap-4 text-sm text-[rgb(var(--muted))]">
              <div className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4" /> {location}
              </div>
              <div className="inline-flex items-center gap-2">
                <Clock className="h-4 w-4" /> {type}
              </div>
            </div>
          </header>

          {/* Summary */}
          <p className="text-[rgb(var(--muted))]">{summary}</p>

          {/* Responsibilities */}
          {role.responsibilities?.length ? (
            <section className="mt-8">
              <h2 className="text-xl font-semibold">
                {t("careers.details.respTitle", "What you'll do")}
              </h2>
              <ul className="mt-3 space-y-2 text-sm text-[rgb(var(--muted))]">
                {role.responsibilities.map((key, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-brand-500 mt-0.5" />
                    <span>{t(key)}</span>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}

          {/* Requirements */}
          {role.requirements?.length ? (
            <section className="mt-8">
              <h2 className="text-xl font-semibold">
                {t("careers.details.reqTitle", "What you'll bring")}
              </h2>
              <ul className="mt-3 space-y-2 text-sm text-[rgb(var(--muted))]">
                {role.requirements.map((key, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-brand-500 mt-0.5" />
                    <span>{t(key)}</span>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}

          {/* Apply CTA */}
          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <Link
              to={internalApplyHref}
              className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-white bg-gradient-to-br from-brand-500 to-brand-700 shadow hover:opacity-95"
            >
              <Briefcase className="h-4 w-4" />
              {t("careers.details.apply", "Apply now")}
            </Link>
            <Link
              to="/contact"
              target="_blank"
              className="inline-flex items-center gap-2 rounded-xl px-5 py-3 border border-white/10 hover:bg-white/5"
            >
              {t("careers.details.contact", "Ask a question")}
            </Link>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
