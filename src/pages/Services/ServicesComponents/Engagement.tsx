import { Clock3, Briefcase, Users } from "lucide-react";

export default function Engagement({ t }: TProp) {
  const models = [
    {
      k: "tm",
      icon: Clock3,
      title: t("services.engagement.tm.title", "Time & Materials"),
      desc: t(
        "services.engagement.tm.desc",
        "Flexible scope, billed by time. Great for evolving products."
      ),
    },
    {
      k: "fixed",
      icon: Briefcase,
      title: t("services.engagement.fixed.title", "Fixed-scope Projects"),
      desc: t(
        "services.engagement.fixed.desc",
        "Clear deliverables, timeline, and price for defined requirements."
      ),
    },
    {
      k: "squad",
      icon: Users,
      title: t("services.engagement.squad.title", "Product Squad"),
      desc: t(
        "services.engagement.squad.desc",
        "A cross-functional team (PM, design, engineering) embedded with you."
      ),
    },
  ];

  return (
    <section className="relative mx-auto max-w-7xl px-4 py-16">
      <div className="max-w-3xl mx-auto text-center">
        <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium tracking-wide border border-white/10 bg-white/5">
          {t("services.engagement.badge", "Engagement")}
        </span>
        <h2 className="mt-3 text-3xl md:text-4xl font-extrabold">
          {t("services.engagement.title", "Engagement models")}
        </h2>
        <p className="mt-3 text-[rgb(var(--muted))]">
          {t(
            "services.engagement.subtitle",
            "Choose what fits: flexible iterations, fixed scope, or a dedicated squad."
          )}
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {models.map(({ k, title, desc, icon: Icon }) => (
          <article
            key={k}
            className="h-full rounded-2xl border border-white/10 bg-white/5 p-6 text-center"
          >
            <div className="flex justify-center mb-4">
              <Icon className="h-12 w-12 text-brand-500" strokeWidth={1.5} />
            </div>
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="mt-2 text-sm text-[rgb(var(--muted))]">{desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
