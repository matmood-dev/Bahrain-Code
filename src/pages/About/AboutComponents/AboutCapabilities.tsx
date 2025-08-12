export default function AboutCapabilities({ t }: TProp) {
    const items = [
  {
    k: "web",
    title: t("about.capabilities.web.title", "Web Applications"),
    desc: t(
      "about.capabilities.web.desc",
      "High-performance, responsive web apps with modern stacks and clean architecture."
    ),
  },
  {
    k: "mobile",
    title: t("about.capabilities.mobile.title", "Mobile Applications"),
    desc: t(
      "about.capabilities.mobile.desc",
      "Cross-platform mobile with React Native: offline support, background audio, deep links."
    ),
  },
  {
    k: "cloud",
    title: t("about.capabilities.cloud.title", "Cloud & DevOps"),
    desc: t(
      "about.capabilities.cloud.desc",
      "Dockerized services, CI/CD pipelines, observability, and zero-downtime deploys."
    ),
  },
  {
    k: "api",
    title: t("about.capabilities.api.title", "APIs & Integrations"),
    desc: t(
      "about.capabilities.api.desc",
      "REST/GraphQL APIs, third-party integrations, webhooks, and authentication flows."
    ),
  },
  {
    k: "dataai",
    title: t("about.capabilities.dataai.title", "Data & AI"),
    desc: t(
      "about.capabilities.dataai.desc",
      "Analytics pipelines, vector search, AI assistants, and automation tooling."
    ),
  },
  {
    k: "commerce",
    title: t("about.capabilities.commerce.title", "eCommerce"),
    desc: t(
      "about.capabilities.commerce.desc",
      "Product catalogs, checkout, payments, and admin dashboards built for scale."
    ),
  },
  {
    k: "uiux",
    title: t("about.capabilities.uiux.title", "UI/UX & Design Systems"),
    desc: t(
      "about.capabilities.uiux.desc",
      "Accessible design, RTL support, dark mode, and reusable component libraries."
    ),
  },
  {
    k: "support",
    title: t("about.capabilities.support.title", "Maintenance & Support"),
    desc: t(
      "about.capabilities.support.desc",
      "SLAs, performance tuning, security hardening, and ongoing feature delivery."
    ),
  },
];

  const data = items;
  return (
    <section className="relative mx-auto max-w-7xl px-4 py-16">
      <div className="max-w-3xl mx-auto text-center">
        <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium tracking-wide border border-white/10 bg-white/5">
          {t("about.capabilities.badge", "Capabilities")}
        </span>
        <h2 className="mt-3 text-3xl md:text-4xl font-extrabold">
          {t("about.capabilities.title", "What we build")}
        </h2>
        <p className="mt-3 text-[rgb(var(--muted))]">
          {t(
            "about.capabilities.subtitle",
            "End-to-end product development: discovery, design, engineering, and delivery."
          )}
        </p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {data.map(({ k, title, desc }) => (
          <article
            key={k}
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
