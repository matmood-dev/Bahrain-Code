export default function AboutStats({ t }: TProp) {
  const stats = [
    { label: t("about.stats.uptime"), value: "100%" },
    { label: t("about.stats.deploys"), value: "40+" },
    { label: t("about.stats.clients"), value: "30+" },
    { label: t("about.stats.platforms"), value: "Web • Mobile" },
  ];

  return (
    <section className="relative mx-auto max-w-7xl px-4 py-16">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl font-extrabold">{s.value}</div>
              <div className="mt-1 text-sm text-[rgb(var(--muted))]">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 text-center text-sm text-[rgb(var(--muted))]">
        {t("about.stats.note")}
      </div>
    </section>
  );
}
