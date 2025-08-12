export default function AboutHero({ t }: TProp) {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-70 blur-3xl -z-10">
        <div className="absolute -top-24 -end-24 h-72 w-72 rounded-full bg-brand-500/40" />
        <div className="absolute bottom-0 -start-16 h-80 w-80 rounded-full bg-brand-700/30" />
      </div>

      <div className="mx-auto max-w-7xl px-4 py-20 md:py-28 text-center">
        <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium tracking-wide border border-white/10 bg-white/5">
          {t("about.badge", "About")}
        </span>
        <h1 className="mt-3 text-4xl md:text-5xl font-extrabold leading-tight">
          {t("about.title", "Software, engineered for real teams")}
        </h1>
        <p className="mt-4 text-lg text-[rgb(var(--muted))] mx-auto max-w-3xl">
          {t(
            "about.subtitle",
            "We design, build, and ship web apps, mobile apps, cloud platforms, and AI-powered tools. From idea to production, we partner with you end-to-end."
          )}
        </p>
      </div>
    </section>
  );
}
