import { useTranslation } from "react-i18next";
import { Mail, Code2, Users, BadgeCheck } from "lucide-react";

export default function HiringProcess({ t }: TProp) {
  const { i18n } = useTranslation();
  const dir = i18n.language === "ar" ? "rtl" : "ltr";

  const steps = [
    { k: "apply", icon: Mail, title: t("careers.process.apply.title"), desc: t("careers.process.apply.desc") },
    { k: "exercise", icon: Code2, title: t("careers.process.exercise.title"), desc: t("careers.process.exercise.desc") },
    { k: "chat", icon: Users, title: t("careers.process.chat.title"), desc: t("careers.process.chat.desc") },
    { k: "offer", icon: BadgeCheck, title: t("careers.process.offer.title"), desc: t("careers.process.offer.desc") },
  ];

  return (
    <section className="relative mx-auto max-w-7xl px-4 py-16" dir={dir}>
      <div className="max-w-3xl mx-auto text-center">
        <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium tracking-wide border border-white/10 bg-white/5">
          {t("careers.process.badge")}
        </span>
        <h2 className="mt-3 text-3xl md:text-4xl font-extrabold">
          {t("careers.process.title")}
        </h2>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-4">
        {steps.map(({ k, icon: Icon, title, desc }) => (
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
