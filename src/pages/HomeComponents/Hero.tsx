function Hero({t}) {
  return (
    <section id="" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-70 blur-3xl">
        <div className="absolute -top-24 -end-24 h-72 w-72 rounded-full bg-brand-500/40" />
        <div className="absolute bottom-0 -start-16 h-80 w-80 rounded-full bg-brand-700/30" />
      </div>

      <div className="mx-auto max-w-7xl px-4 py-20 md:py-28">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            {t("home.hero.title")}
          </h1>
          <p className="mt-4 text-lg text-[rgb(var(--muted))]">
            {t("home.hero.subtitle")}
          </p>
          <div className="mt-8 flex flex-wrap justify-center items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center rounded-xl px-5 py-3 text-white bg-gradient-to-br from-brand-500 to-brand-700 shadow hover:opacity-95"
            >
              {t("home.hero.ctaPrimary")}
            </a>
            <a
              href="#work"
              className="inline-flex items-center rounded-xl px-5 py-3 border border-white/10 hover:bg-white/5"
            >
              {t("home.hero.ctaSecondary")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
