import { Lightbulb, PenTool, Code2, Rocket } from "lucide-react";

export default function Process({ t }: TProp) {
  const steps = [
    {
      k: "discover",
      icon: Lightbulb,
      title: t("services.process.discover.title", "Discover"),
      desc: t(
        "services.process.discover.desc",
        "Workshops, requirements, and prioritization to define clear outcomes."
      ),
    },
    {
      k: "design",
      icon: PenTool,
      title: t("services.process.design.title", "Design"),
      desc: t(
        "services.process.design.desc",
        "UX flows, wireframes, and UI systems with accessibility and RTL in mind."
      ),
    },
    {
      k: "build",
      icon: Code2,
      title: t("services.process.build.title", "Build"),
      desc: t(
        "services.process.build.desc",
        "Incremental delivery with CI/CD, testing, and observability."
      ),
    },
    {
      k: "launch",
      icon: Rocket,
      title: t("services.process.launch.title", "Launch"),
      desc: t(
        "services.process.launch.desc",
        "Hardening, monitoring, and a rollout plan for a smooth go-live."
      ),
    },
  ];

  return (
    <section className="relative mx-auto max-w-7xl px-4 py-16">
      <div className="max-w-3xl mx-auto text-center">
        <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium tracking-wide border border-white/10 bg-white/5">
          {t("services.process.badge", "Process")}
        </span>
        <h2 className="mt-3 text-3xl md:text-4xl font-extrabold">
          {t("services.process.title", "How we work")}
        </h2>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-4">
        {steps.map(({ k, title, desc, icon: Icon }) => (
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
