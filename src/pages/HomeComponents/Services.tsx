import { services } from "../../data/services";
import SectionCard from "../../components/SectionCard";

function Services({ t }: TProp) {
  return (
    <section id="services" className="relative mx-auto max-w-7xl px-4 py-20">
      {/* soft background accents */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-60 blur-3xl">
        <div className="absolute -top-24 -start-24 h-56 w-56 rounded-full bg-brand-500/20" />
        <div className="absolute bottom-0 -end-16 h-64 w-64 rounded-full bg-brand-700/20" />
      </div>

      {/* header */}
      <div className="max-w-3xl mx-auto text-center">
        <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium tracking-wide border border-white/10 bg-white/5">
          {t("home.sections.services")}
        </span>
        <h2 className="mt-3 text-3xl md:text-4xl font-extrabold">
          {t("home.sections.services")}
        </h2>
        <p className="mt-3 text-[rgb(var(--muted))]">
          {t("home.sections.services-slogan")}
        </p>
      </div>

      {/* grid */}
      <div className="mt-10 grid grid-cols-3 gap-6 lg:grid-cols-4 items-stretch">
        {services.map(({ key, icon }) => (
          <div key={key} className="h-full">
            <SectionCard
              title={t(`home.services.${key}.title`)}
              desc={t(`home.services.${key}.desc`)}
              icon={icon}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
