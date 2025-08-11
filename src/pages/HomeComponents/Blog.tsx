import SectionCard from "../../components/SectionCard";

function Blog({ t }) {
  return (
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
  );
}

export default Blog;
