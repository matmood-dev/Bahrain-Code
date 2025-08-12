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
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-6 items-center justify-items-center">
            <img src="/logos/react.svg" alt="React" className="h-10 w-auto" />
            <img src="/logos/python.svg" alt="Python" className="h-10 w-auto" />
            <img src="/logos/nestjs.svg" alt="NestJS" className="h-10 w-auto" />
            <img
              src="/logos/nodejs.svg"
              alt="Node.js"
              className="h-10 w-auto"
            />
            <img src="/logos/go.svg" alt="Go" className="h-10 w-auto" />
            <img src="/logos/docker.svg" alt="Docker" className="h-10 w-auto" />
            <img src="/logos/openai.svg" alt="AI" className="h-10 w-auto" />
            <img src="/logos/apple.svg" alt="Apple" className="h-10 w-auto" />
            <img src="/logos/android.svg" alt="Android" className="h-10 w-auto" />
            <img src="/logos/net.svg" alt="Dot Net" className="h-10 w-auto" />
            <img src="/logos/java.svg" alt="Java" className="h-10 w-auto" />
            <img src="/logos/typescript.svg" alt="TypeScript" className="h-10 w-auto" />
          </div>
        </div>
      </div>
    </section>
  );
}
