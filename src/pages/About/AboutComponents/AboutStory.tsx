export default function AboutStory({ t }: TProp) {
  return (
    <section className="relative mx-auto max-w-7xl px-4 py-16">
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-50 blur-3xl">
        <div className="absolute -top-20 -start-24 h-56 w-56 rounded-full bg-brand-500/20" />
        <div className="absolute bottom-0 -end-16 h-64 w-64 rounded-full bg-brand-700/20" />
      </div>

      <div className="grid gap-8 md:grid-cols-2 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold">
            {t("about.story.title", "Our Story")}
          </h2>
          <p className="mt-4 text-[rgb(var(--muted))]">
            {t(
              "about.story.p1",
              "Founded in Bahrain, we started Bahrain Code to build practical software that teams actually enjoy using—fast, secure, and maintainable."
            )}
          </p>
          <p className="mt-3 text-[rgb(var(--muted))]">
            {t(
              "about.story.p2",
              "Today we ship across the stack: responsive web apps, native-quality mobile apps, cloud-native backends, and data/AI integrations that unlock real outcomes."
            )}
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <ul className="space-y-3 text-sm text-[rgb(var(--muted))]">
            <li>• {t("about.story.list.0", "Web: React, Vite, Next.js")}</li>
            <li>• {t("about.story.list.1", "Mobile: React Native, Expo")}</li>
            <li>• {t("about.story.list.2", "Backend: NestJS, Node, Go")}</li>
            <li>• {t("about.story.list.3", "Cloud & DevOps: Docker, CI/CD")}</li>
            <li>• {t("about.story.list.4", "Data & AI: integrations, LLM tooling")}</li>
            <li>• {t("about.story.list.5", "Security, RBAC, audit trails")}</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
