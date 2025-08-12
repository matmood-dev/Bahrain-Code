function Work({ t }: TProp) {
  return (
    <section id="work" className="relative mx-auto max-w-7xl px-4 py-20">
      {/* soft background accents */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-50 blur-3xl">
        <div className="absolute -top-20 -start-24 h-56 w-56 rounded-full bg-brand-500/20" />
        <div className="absolute bottom-0 -end-16 h-64 w-64 rounded-full bg-brand-700/20" />
      </div>

      {/* header */}
      <div className="max-w-3xl mx-auto text-center">
        <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium tracking-wide border border-white/10 bg-white/5">
          {t("home.sections.work")}
        </span>
        <h2 className="mt-3 text-3xl md:text-4xl font-extrabold">
          {t("home.sections.work")}
        </h2>
        <p className="mt-3 text-[rgb(var(--muted))]">
          {t("home.sections.work-slogan")}
        </p>
      </div>

      {/* projects grid */}
      <div className="mt-10 grid gap-6 md:grid-cols-2 items-stretch">
        {/* Card 1 */}
        <article className="group h-full rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-0.5 hover:bg-white/7">
          <header className="flex items-center justify-between">
            <h3 className="text-xl font-semibold">Humx HRMS</h3>
            <span className="text-xs px-2 py-1 rounded-full border border-white/10 bg-white/5">
              SaaS
            </span>
          </header>

          <p className="mt-3 text-[rgb(var(--muted))]">
            Modular HR platform: employees, payroll, training, and self-service.
          </p>

          {/* quick highlights */}
          <ul className="mt-4 text-sm text-[rgb(var(--muted))] space-y-1">
            <li>• Role-based access & audit trails</li>
            <li>• Payroll engine with multi-currency</li>
            <li>• Employee self-service portal</li>
          </ul>

          {/* tags */}
          <div className="mt-5 flex flex-wrap gap-2 text-xs">
            {["React", "NestJS", "Postgres", "CI/CD"].map((tag) => (
              <span
                key={tag}
                className="rounded-full px-2 py-1 border border-white/10 bg-white/5"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-6">
            <a
              href="#"
              className="inline-flex items-center gap-2 text-sm rounded-lg border border-white/10 px-3 py-2 hover:bg-white/5"
            >
              View case study
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                className="opacity-80"
              >
                <path fill="currentColor" d="M13 5l7 7-7 7v-4H4v-6h9V5z" />
              </svg>
            </a>
          </div>
        </article>

        {/* Card 2 */}
        <article className="group h-full rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-0.5 hover:bg-white/7">
          <header className="flex items-center justify-between">
            <h3 className="text-xl font-semibold">Quran Mobile</h3>
            <span className="text-xs px-2 py-1 rounded-full border border-white/10 bg-white/5">
              Mobile
            </span>
          </header>

          <p className="mt-3 text-[rgb(var(--muted))]">
            RTL-perfect reading, audio player, and shareable ayah cards.
          </p>

          <ul className="mt-4 text-sm text-[rgb(var(--muted))] space-y-1">
            <li>• Smooth page flipping & bookmarking</li>
            <li>• Offline audio & background playback</li>
            <li>• Deep linking & shareable moments</li>
          </ul>

          <div className="mt-5 flex flex-wrap gap-2 text-xs">
            {["React Native", "Expo", "i18n", "RTL"].map((tag) => (
              <span
                key={tag}
                className="rounded-full px-2 py-1 border border-white/10 bg-white/5"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-6">
            <a
              href="#"
              className="inline-flex items-center gap-2 text-sm rounded-lg border border-white/10 px-3 py-2 hover:bg-white/5"
            >
              View case study
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                className="opacity-80"
              >
                <path fill="currentColor" d="M13 5l7 7-7 7v-4H4v-6h9V5z" />
              </svg>
            </a>
          </div>
        </article>
      </div>

      {/* bottom CTA */}
      <div className="mt-10 flex justify-center">
        <a
          href="#contact"
          className="inline-flex items-center rounded-xl px-5 py-3 text-white bg-gradient-to-br from-brand-500 to-brand-700 shadow hover:opacity-95"
        >
          {t("home.sections.work-button")}
        </a>
      </div>
    </section>
  );
}

export default Work;
