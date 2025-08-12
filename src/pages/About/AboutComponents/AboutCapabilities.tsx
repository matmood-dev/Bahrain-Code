import {
  Globe,
  Smartphone,
  Cloud,
  Share2,
  BrainCircuit,
  ShoppingCart,
  Palette,
  LifeBuoy,
} from "lucide-react";

export default function AboutCapabilities({ t }: TProp) {
  const items = [
    {
      k: "web",
      title: t("about.capabilities.web.title"),
      desc: t("about.capabilities.web.desc"),
      icon: Globe,
    },
    {
      k: "mobile",
      title: t("about.capabilities.mobile.title"),
      desc: t("about.capabilities.mobile.desc"),
      icon: Smartphone,
    },
    {
      k: "cloud",
      title: t("about.capabilities.cloud.title"),
      desc: t("about.capabilities.cloud.desc"),
      icon: Cloud,
    },
    {
      k: "api",
      title: t("about.capabilities.api.title"),
      desc: t("about.capabilities.api.desc"),
      icon: Share2,
    },
    {
      k: "dataai",
      title: t("about.capabilities.dataai.title"),
      desc: t("about.capabilities.dataai.desc"),
      icon: BrainCircuit,
    },
    {
      k: "commerce",
      title: t("about.capabilities.commerce.title"),
      desc: t("about.capabilities.commerce.desc"),
      icon: ShoppingCart,
    },
    {
      k: "uiux",
      title: t("about.capabilities.uiux.title"),
      desc: t("about.capabilities.uiux.desc"),
      icon: Palette,
    },
    {
      k: "support",
      title: t("about.capabilities.support.title"),
      desc: t("about.capabilities.support.desc"),
      icon: LifeBuoy,
    },
  ];

  return (
    <section className="relative mx-auto max-w-7xl px-4 py-16">
      <div className="max-w-3xl mx-auto text-center">
        <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium tracking-wide border border-white/10 bg-white/5">
          {t("about.capabilities.badge")}
        </span>
        <h2 className="mt-3 text-3xl md:text-4xl font-extrabold">
          {t("about.capabilities.title")}
        </h2>
        <p className="mt-3 text-[rgb(var(--muted))]">
          {t("about.capabilities.subtitle",)}
        </p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map(({ k, title, desc, icon: Icon }) => (
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
