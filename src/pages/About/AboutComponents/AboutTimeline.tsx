export default function AboutTimeline({ t }: TProp) {
  const events = [
    {
      year: "2023",
      title: t("about.timeline.2023.title"),
      desc: t("about.timeline.2023.desc"),
    },
    {
      year: "2024",
      title: t("about.timeline.2024.title"),
      desc: t("about.timeline.2024.desc"),
    },
    {
      year: "2025",
      title: t("about.timeline.2025.title"),
      desc: t("about.timeline.2025.desc"),
    },
  ];

  return (
    <section className="relative mx-auto max-w-7xl px-4 py-16">
      <div className="max-w-3xl mx-auto text-center">
        <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium tracking-wide border border-white/10 bg-white/5">
          {t("about.timeline.badge")}
        </span>
        <h2 className="mt-3 text-3xl md:text-4xl font-extrabold">
          {t("about.timeline.title")}
        </h2>
      </div>

      <ol className="mt-10 relative border-s border-white/10 max-w-3xl mx-auto">
        {events.map((e, idx) => (
          <li key={idx} className="ms-6 mb-8">
            <span className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full bg-brand-500 border border-white/20" />
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">{e.title}</h3>
                <span className="text-xs rounded-full border border-white/10 bg-white/5 px-2 py-0.5">
                  {e.year}
                </span>
              </div>
              <p className="mt-2 text-sm text-[rgb(var(--muted))]">{e.desc}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
