import { HeartHandshake, PiggyBank, GraduationCap, Home, Globe2, Laptop } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Benefits({ t }: TProp) {
  const { i18n } = useTranslation();
  const dir = i18n.language === "ar" ? "rtl" : "ltr";

  const items = [
    { k: "remote", icon: Globe2, title: t("careers.benefits.remote.title"), desc: t("careers.benefits.remote.desc") },
    { k: "learning", icon: GraduationCap, title: t("careers.benefits.learning.title"), desc: t("careers.benefits.learning.desc") },
    { k: "hardware", icon: Laptop, title: t("careers.benefits.hardware.title"), desc: t("careers.benefits.hardware.desc") },
    { k: "timeoff", icon: Home, title: t("careers.benefits.timeoff.title"), desc: t("careers.benefits.timeoff.desc") },
    { k: "wellbeing", icon: HeartHandshake, title: t("careers.benefits.wellbeing.title"), desc: t("careers.benefits.wellbeing.desc") },
    { k: "comp", icon: PiggyBank, title: t("careers.benefits.comp.title"), desc: t("careers.benefits.comp.desc") },
  ];

  return (
    <section className="relative mx-auto max-w-7xl px-4 py-16" dir={dir}>
      <div className="max-w-3xl mx-auto text-center">
        <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium tracking-wide border border-white/10 bg-white/5">
          {t("careers.benefits.badge")}
        </span>
        <h2 className="mt-3 text-3xl md:text-4xl font-extrabold">
          {t("careers.benefits.title")}
        </h2>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map(({ k, icon: Icon, title, desc }) => (
          <article key={k} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
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
