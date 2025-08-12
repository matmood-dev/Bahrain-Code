import { Link } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout";
import { AlertTriangle } from "lucide-react";

export default function NotFound({ t }: TProp) {
  return (
    <DefaultLayout>
      <section className="relative mx-auto max-w-7xl px-4 py-20 text-center">
        {/* Soft background accents */}
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-60 blur-3xl">
          <div className="absolute -top-24 -start-24 h-56 w-56 rounded-full bg-brand-500/20" />
          <div className="absolute bottom-0 -end-16 h-64 w-64 rounded-full bg-brand-700/20" />
        </div>

        <div className="flex flex-col items-center">
          <AlertTriangle className="h-16 w-16 text-brand-500 mb-6" />
          <h1 className="text-6xl font-extrabold">404</h1>
          <h2 className="mt-2 text-2xl font-bold">
            {t("notfound.title", "Page not found")}
          </h2>
          <p className="mt-3 text-[rgb(var(--muted))] max-w-md">
            {t(
              "notfound.subtitle",
              "Sorry, the page you’re looking for doesn’t exist or has been moved."
            )}
          </p>

          <Link
            to="/"
            className="mt-8 inline-flex items-center rounded-xl px-5 py-3 text-white bg-gradient-to-br from-brand-500 to-brand-700 shadow hover:opacity-95"
          >
            {t("notfound.button", "Go back home")}
          </Link>
        </div>
      </section>
    </DefaultLayout>
  );
}
