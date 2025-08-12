export default function ServicesCTA({ t }: TProp) {
  return (
    <section className="relative mx-auto max-w-7xl px-4 py-20 text-center">
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-60 blur-3xl">
        <div className="absolute -top-24 -start-24 h-56 w-56 rounded-full bg-brand-500/20" />
        <div className="absolute bottom-0 -end-16 h-64 w-64 rounded-full bg-brand-700/20" />
      </div>

      <h2 className="text-3xl md:text-4xl font-extrabold">
        {t("services.cta.title", "Ready to ship with confidence?")}
      </h2>
      <p className="mt-3 text-[rgb(var(--muted))] mx-auto max-w-2xl">
        {t(
          "services.cta.subtitle",
          "Tell us about your product, and we’ll propose a path that fits scope, speed, and budget."
        )}
      </p>
      <div className="mt-8 flex justify-center">
        <a
          href="#contact"
          className="inline-flex items-center rounded-xl px-5 py-3 text-white bg-gradient-to-br from-brand-500 to-brand-700 shadow hover:opacity-95"
        >
          {t("services.cta.button", "Start Your Project")}
        </a>
      </div>
    </section>
  );
}
