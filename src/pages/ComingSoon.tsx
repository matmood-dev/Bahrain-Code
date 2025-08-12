import { Clock } from "lucide-react";
import { Link } from "react-router-dom";

import DefaultLayout from "../layouts/DefaultLayout";

export default function ComingSoon({ t }: TProp) {
  return (
    <DefaultLayout>
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-gradient-to-br from-brand-500/10 to-brand-700/10">
        <div className="bg-white/70 dark:bg-black/40 backdrop-blur-lg p-8 rounded-2xl shadow-lg max-w-lg w-full border border-black/5 dark:border-white/10">
          <Clock className="w-16 h-16 text-brand-600 dark:text-brand-300 mx-auto mb-4" />
          <h1 className="text-3xl font-bold mb-2">{t("comingSoon.title")}</h1>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            {t("comingSoon.subtitle")}
          </p>
          <Link
            to="/"
            className="inline-block px-6 py-2 rounded-lg bg-gradient-to-br from-brand-500 to-brand-700 text-white font-medium hover:opacity-90 transition"
          >
            {t("comingSoon.backHome")}
          </Link>
        </div>

        <p className="mt-6 text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} {t("home.brand")}
        </p>
      </div>
    </DefaultLayout>
  );
}
