import DefaultLayout from "../layouts/DefaultLayout";
import SectionCard from "../components/SectionCard";
import { useTranslation } from "react-i18next";
import { Code2, Smartphone, Cloud, PenTool } from "lucide-react";

const services = [
  {
    title: "Web Apps",
    desc: "High-performance SPAs with clean architecture.",
    icon: <Code2 />,
  },
  {
    title: "Mobile Apps",
    desc: "iOS/Android with native feel and delightful UX.",
    icon: <Smartphone />,
  },
  {
    title: "Cloud & DevOps",
    desc: "CI/CD, containerization, and scalable infra.",
    icon: <Cloud />,
  },
  {
    title: "UI/UX & Branding",
    desc: "Design systems, wireframes, and polished visuals.",
    icon: <PenTool />,
  },
];

export default function Home() {
  const { t } = useTranslation();

  return (
    <DefaultLayout>
      {/* Hero */}
      <section id="" className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 opacity-70 blur-3xl">
          <div className="absolute -top-24 -end-24 h-72 w-72 rounded-full bg-brand-500/40" />
          <div className="absolute bottom-0 -start-16 h-80 w-80 rounded-full bg-brand-700/30" />
        </div>

        <div className="mx-auto max-w-7xl px-4 py-20 md:py-28">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              {t("home.hero.title")}
            </h1>
            <p className="mt-4 text-lg text-[rgb(var(--muted))]">
              {t("home.hero.subtitle")}
            </p>
            <div className="mt-8 flex flex-wrap justify-center items-center gap-3">
              <a
                href="#contact"
                className="inline-flex items-center rounded-xl px-5 py-3 text-white bg-gradient-to-br from-brand-500 to-brand-700 shadow hover:opacity-95"
              >
                {t("home.hero.ctaPrimary")}
              </a>
              <a
                href="#work"
                className="inline-flex items-center rounded-xl px-5 py-3 border border-white/10 hover:bg-white/5"
              >
                {t("home.hero.ctaSecondary")}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-7xl px-4 py-16 md:py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-2">
            {t("home.sections.services")}
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, idx) => (
            <SectionCard
              key={idx}
              title={service.title}
              desc={service.desc}
              icon={service.icon}
            />
          ))}
        </div>
      </section>

      {/* Work */}
      <section id="work" className="mx-auto max-w-7xl px-4 py-16 md:py-20">
        <h2 className="text-2xl font-bold mb-6 text-center">
          {t("home.sections.work")}
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <article className="prose-invert max-w-none rounded-2xl border border-white/10 p-6 bg-white/5">
            <h3>Humx HRMS</h3>
            <p className="text-[rgb(var(--muted))]">
              Modular HR platform: employees, payroll, training, and
              self-service. React + NestJS.
            </p>
          </article>
          <article className="prose-invert max-w-none rounded-2xl border border-white/10 p-6 bg-white/5">
            <h3>Quran Mobile</h3>
            <p className="text-[rgb(var(--muted))]">
              RTL-perfect reading, audio player, shareable ayah cards. React
              Native + Expo.
            </p>
          </article>
        </div>
      </section>

      {/* Blog */}
      <section id="blog" className="mx-auto max-w-7xl px-4 py-16 md:py-20">
        <h2 className="text-2xl font-bold mb-6 text-center">
          {t("home.sections.blog")}
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <SectionCard
            title="Vite + Tailwind in 2025"
            desc="Why this stack dominates modern front-ends."
            href="#"
          />
          <SectionCard
            title="React Native & Performance"
            desc="Bridging, JSI, and how to keep 60fps."
            href="#"
          />
          <SectionCard
            title="NestJS Best Practices"
            desc="DTOs, validation, and clean architecture."
            href="#"
          />
        </div>
      </section>
    </DefaultLayout>
  );
}
