import { Link } from "react-router-dom";

export default function AboutCTA({ t }: TProp) {
  return (
    <section className="relative mx-auto max-w-7xl px-4 py-20 text-center">
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-60 blur-3xl">
        <div className="absolute -top-24 -start-24 h-56 w-56 rounded-full bg-brand-500/20" />
        <div className="absolute bottom-0 -end-16 h-64 w-64 rounded-full bg-brand-700/20" />
      </div>

      <h2 className="text-3xl md:text-4xl font-extrabold">
        {t("about.cta.title")}
      </h2>
      <p className="mt-3 text-[rgb(var(--muted))] mx-auto max-w-2xl">
        {t("about.cta.subtitle")}
      </p>
      <div className="mt-8 flex justify-center">
        <Link
          to="/contact"
          className="inline-flex items-center rounded-xl px-5 py-3 text-white bg-gradient-to-br from-brand-500 to-brand-700 shadow hover:opacity-95"
        >
          {t("about.cta.button")}
        </Link>
      </div>
    </section>
  );
}
