import DefaultLayout from "../../layouts/DefaultLayout";
import { useTranslation } from "react-i18next";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import { Send, Paperclip } from "lucide-react";

export default function Apply({ t }: TProp) {
  const { i18n } = useTranslation();
  const [params] = useSearchParams();
  const dir = i18n.language === "ar" ? "rtl" : "ltr";

  const [submitting, setSubmitting] = useState(false);
  const [file, setFile] = useState<File | null>(null);

  const roleTitle = params.get("role") || t("apply.unknownRole");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 900));
    setSubmitting(false);
    alert(t("apply.success"));
  };

  return (
    <DefaultLayout>
      <section className="relative overflow-hidden" dir={dir}>
        <div className="pointer-events-none absolute inset-0 opacity-60 blur-3xl -z-10">
          <div className="absolute -top-24 -end-24 h-72 w-72 rounded-full bg-brand-500/30" />
          <div className="absolute bottom-0 -start-16 h-80 w-80 rounded-full bg-brand-700/20" />
        </div>

        <div className="mx-auto max-w-3xl px-4 py-16">
          <div className="text-center">
            <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium tracking-wide border border-white/10 bg-white/5">
              {t("apply.badge")}
            </span>
            <h1 className="mt-3 text-3xl md:text-4xl font-extrabold">
              {t("apply.title")} {roleTitle}
            </h1>
          </div>

          <form onSubmit={handleSubmit} className="mt-10 grid gap-4 rounded-2xl border border-white/10 bg-white/5 p-6">
            <div>
              <label className="block text-sm mb-1">{t("apply.fields.name")}</label>
              <input className="w-full rounded-lg border border-white/10 bg-transparent px-3 py-2 outline-none focus:ring-2 focus:ring-brand-500" required />
            </div>
            <div>
              <label className="block text-sm mb-1">{t("apply.fields.email")}</label>
              <input type="email" className="w-full rounded-lg border border-white/10 bg-transparent px-3 py-2 outline-none focus:ring-2 focus:ring-brand-500" required />
            </div>
            <div>
              <label className="block text-sm mb-1">{t("apply.fields.links")}</label>
              <input className="w-full rounded-lg border border-white/10 bg-transparent px-3 py-2 outline-none focus:ring-2 focus:ring-brand-500" />
            </div>
            <div>
              <label className="block text-sm mb-1">{t("apply.fields.note")}</label>
              <textarea rows={5} className="w-full rounded-lg border border-white/10 bg-transparent px-3 py-2 outline-none focus:ring-2 focus:ring-brand-500" />
            </div>
            <div>
              <label className="block text-sm mb-1">{t("apply.fields.cv", "Attach CV (PDF)")}</label>
              <label className="inline-flex items-center gap-2 cursor-pointer rounded-lg border border-white/10 bg-white/5 px-3 py-2 hover:bg-white/7">
                <Paperclip className="h-4 w-4" />
                <span className="text-sm">{file?.name || t("apply.fields.choose")}</span>
                <input type="file" accept="application/pdf" className="hidden" onChange={(e) => setFile(e.target.files?.[0] || null)} />
              </label>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                disabled={submitting}
                className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-white bg-gradient-to-br from-brand-500 to-brand-700 shadow hover:opacity-95 disabled:opacity-60"
              >
                <Send className="h-4 w-4" />
                {submitting ? t("apply.actions.sending") : t("apply.actions.submit")}
              </button>
            </div>
          </form>
        </div>
      </section>
    </DefaultLayout>
  );
}
