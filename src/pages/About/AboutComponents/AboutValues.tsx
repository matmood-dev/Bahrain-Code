export default function AboutValues({ t }: TProp) {
  const items = [
    {
      key: "craft",
      title: t("about.values.craft.title"),
      desc: t("about.values.craft.desc"),
    },
    {
      key: "trust",
      title: t("about.values.trust.title"),
      desc: t("about.values.trust.desc"),
    },
    {
      key: "focus",
      title: t("about.values.focus.title"),
      desc: t("about.values.focus.desc"),
    },
    {
      key: "care",
      title: t("about.values.care.title"),
      desc: t("about.values.care.desc"),
    },
  ];

  return (
    <section className="relative mx-auto max-w-7xl px-4 py-16">
      <div className="max-w-3xl mx-auto text-center">
        <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium tracking-wide border border-white/10 bg:white/5 bg-white/5">
          {t("about.values.badge")}
        </span>
        <h2 className="mt-3 text-3xl md:text-4xl font-extrabold">
          {t("about.values.title")}
        </h2>
        <p className="mt-3 text-[rgb(var(--muted))]">
          {t("about.values.subtitle")}
        </p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map(({ key, title, desc }) => (
          <article
            key={key}
            className="h-full rounded-2xl border border-white/10 bg-white/5 p-6"
          >
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="mt-2 text-sm text-[rgb(var(--muted))]">{desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
