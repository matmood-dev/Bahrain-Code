import {
  Globe,
  Smartphone,
  Cloud,
  Share2,
  BrainCircuit,
  ShoppingCart,
  Palette,
  ShieldCheck,
} from "lucide-react";

export default function ServicesList({ t }: TProp) {
  const items = [
    {
      k: "web",
      icon: Globe,
      title: t("services.cards.web.title", "Web Applications"),
      desc: t(
        "services.cards.web.desc",
        "Responsive, fast, and accessible web platforms built with modern stacks."
      ),
    },
    {
      k: "mobile",
      icon: Smartphone,
      title: t("services.cards.mobile.title", "Mobile Applications"),
      desc: t(
        "services.cards.mobile.desc",
        "Cross-platform apps with React Native: offline, background tasks, deep links."
      ),
    },
    {
      k: "cloud",
      icon: Cloud,
      title: t("services.cards.cloud.title", "Cloud & DevOps"),
      desc: t(
        "services.cards.cloud.desc",
        "Docker, CI/CD, monitoring, and zero-downtime deployments."
      ),
    },
    {
      k: "api",
      icon: Share2,
      title: t("services.cards.api.title", "APIs & Integrations"),
      desc: t(
        "services.cards.api.desc",
        "REST/GraphQL APIs, third-party integrations, webhooks, auth flows."
      ),
    },
    {
      k: "dataai",
      icon: BrainCircuit,
      title: t("services.cards.dataai.title", "Data & AI"),
      desc: t(
        "services.cards.dataai.desc",
        "Search, analytics, vector DBs, and AI assistants that automate workflows."
      ),
    },
    {
      k: "commerce",
      icon: ShoppingCart,
      title: t("services.cards.commerce.title", "eCommerce"),
      desc: t(
        "services.cards.commerce.desc",
        "Catalogs, checkout, payments, multi-currency, and admin dashboards."
      ),
    },
    {
      k: "uiux",
      icon: Palette,
      title: t("services.cards.uiux.title", "UI/UX & Design Systems"),
      desc: t(
        "services.cards.uiux.desc",
        "Design systems, RTL, dark mode, and accessible component libraries."
      ),
    },
    {
      k: "security",
      icon: ShieldCheck,
      title: t("services.cards.security.title", "Security & Compliance"),
      desc: t(
        "services.cards.security.desc",
        "RBAC, audit trails, encryption at rest/in transit, and best practices."
      ),
    },
  ];

  return (
    <section className="relative mx-auto max-w-7xl px-4 py-16">
      <div className="max-w-3xl mx-auto text-center">
        <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium tracking-wide border border-white/10 bg-white/5">
          {t("services.list.badge", "What we do")}
        </span>
        <h2 className="mt-3 text-3xl md:text-4xl font-extrabold">
          {t("services.list.title", "Engineering across the stack")}
        </h2>
        <p className="mt-3 text-[rgb(var(--muted))]">
          {t(
            "services.list.subtitle",
            "Pick one service or combine multiple — we adapt to your team and timeline."
          )}
        </p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map(({ k, title, desc, icon: Icon }) => (
          <article
            key={k}
            className="h-full rounded-2xl border border-white/10 bg-white/5 p-6 text-center hover:-translate-y-0.5 transition"
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
