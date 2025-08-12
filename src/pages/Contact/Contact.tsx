import { useState } from "react";
import { useTranslation } from "react-i18next";
import DefaultLayout from "../../layouts/DefaultLayout";
import { Mail, Phone, MapPin, Clock, Send, Paperclip } from "lucide-react";

type ContactForm = {
  name: string;
  email: string;
  phone?: string;
  topic: string;
  message: string;
  file?: File | null;
  consent: boolean;
};

const TOPICS = ["sales", "support", "partnership", "careers", "other"] as const;

export default function Contact({ t }: TProp) {
  const { i18n } = useTranslation();
  const dir = i18n.language === "ar" ? "rtl" : "ltr";

  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState<ContactForm>({
    name: "",
    email: "",
    phone: "",
    topic: "",
    message: "",
    file: null,
    consent: false,
  });

  const handleChange =
    (key: keyof ContactForm) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
    ) =>
      setForm((prev) => ({ ...prev, [key]: e.target.value }));

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((p) => ({ ...p, file: e.target.files?.[0] || null }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message || !form.consent) {
      alert(
        t("contact.errors.fillRequired")
      );
      return;
    }
    try {
      setSubmitting(true);
      // const payload = new FormData(); // (uncomment and send to your API)
      await new Promise((r) => setTimeout(r, 900)); // simulate success
      setSent(true);
      setForm({
        name: "",
        email: "",
        phone: "",
        topic: "",
        message: "",
        file: null,
        consent: false,
      });
    } catch {
      alert(
        t("contact.errors.submitFailed")
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <DefaultLayout>
      <section className="relative overflow-hidden" dir={dir}>
        <div className="pointer-events-none absolute inset-0 opacity-60 blur-3xl -z-10">
          <div className="absolute -top-24 -end-24 h-72 w-72 rounded-full bg-brand-500/30" />
          <div className="absolute bottom-0 -start-16 h-80 w-80 rounded-full bg-brand-700/20" />
        </div>

        <div className="mx-auto max-w-7xl px-4 py-16 md:py-20">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium tracking-wide border border-white/10 bg-white/5">
              {t("contact.badge")}
            </span>
            <h1 className="mt-3 text-3xl md:text-4xl font-extrabold">
              {t("contact.title")}
            </h1>
            <p className="mt-3 text-[rgb(var(--muted))]">
              {t(
                "contact.subtitle",
                "Questions, quotes, or support — we’re here to help."
              )}
            </p>
            {sent && (
              <p className="mt-4 text-sm text-emerald-400">
                {t("contact.success")}
              </p>
            )}
          </div>

          {/* Content */}
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="lg:col-span-2 rounded-2xl border border-white/10 bg-white/5 p-6 grid gap-4"
            >
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="block text-sm mb-1">
                    {t("contact.fields.name")}{" "}
                    <span className="text-brand-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={handleChange("name")}
                    required
                    className="w-full rounded-lg border border-white/10 bg-transparent px-3 py-2 outline-none focus:ring-2 focus:ring-brand-500"
                    placeholder={t(
                      "contact.placeholders.name",
                      "e.g., John Doe"
                    )}
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">
                    {t("contact.fields.email")}{" "}
                    <span className="text-brand-500">*</span>
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={handleChange("email")}
                    required
                    className="w-full rounded-lg border border-white/10 bg-transparent px-3 py-2 outline-none focus:ring-2 focus:ring-brand-500"
                    placeholder="name@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">
                    {t("contact.fields.phone")}
                  </label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={handleChange("phone")}
                    className="w-full rounded-lg border border-white/10 bg-transparent px-3 py-2 outline-none focus:ring-2 focus:ring-brand-500"
                    placeholder="+973 ..."
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">
                    {t("contact.fields.topic")}
                  </label>
                  <select
                    value={form.topic}
                    onChange={handleChange("topic")}
                    className="w-full rounded-lg border border-white/10 bg-transparent px-3 py-2 outline-none focus:ring-2 focus:ring-brand-500"
                  >
                    <option value="">
                      {t("contact.placeholders.select")}
                    </option>
                    {TOPICS.map((k) => (
                      <option key={k} value={k} className="bg-black text-white">
                        {t(`contact.topics.${k}`, k)}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm mb-1">
                  {t("contact.fields.message")}{" "}
                  <span className="text-brand-500">*</span>
                </label>
                <textarea
                  value={form.message}
                  onChange={handleChange("message")}
                  required
                  rows={6}
                  className="w-full rounded-lg border border-white/10 bg-transparent px-3 py-2 outline-none focus:ring-2 focus:ring-brand-500"
                  placeholder={t(
                    "contact.placeholders.message",
                    "How can we help?"
                  )}
                />
              </div>

              <div>
                <label className="block text-sm mb-1">
                  {t("contact.fields.file")}
                </label>
                <label className="inline-flex items-center gap-2 cursor-pointer rounded-lg border border-white/10 bg-white/5 px-3 py-2 hover:bg-white/7">
                  <Paperclip className="h-4 w-4" />
                  <span className="text-sm">
                    {form.file
                      ? form.file.name
                      : t("contact.placeholders.file")}
                  </span>
                  <input type="file" className="hidden" onChange={handleFile} />
                </label>
              </div>

              <label className="inline-flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  checked={form.consent}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, consent: e.target.checked }))
                  }
                  className="h-4 w-4 rounded border-white/20 bg-transparent"
                  required
                />
                <span>
                  {t(
                    "contact.fields.consent",
                    "I agree to be contacted about my request."
                  )}{" "}
                  <span className="text-brand-500">*</span>
                </span>
              </label>

              <div className="flex justify-center">
                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-white bg-gradient-to-br from-brand-500 to-brand-700 shadow hover:opacity-95 disabled:opacity-60"
                >
                  <Send className="h-4 w-4" />
                  {submitting
                    ? t("contact.actions.sending")
                    : t("contact.actions.submit")}
                </button>
              </div>
            </form>

            {/* Contact info */}
            <aside className="rounded-2xl border border-white/10 bg-white/5 p-6 space-y-4 h-max">
              <h3 className="text-lg font-semibold">
                {t("contact.info.title")}
              </h3>
              <p className="text-sm text-[rgb(var(--muted))]">
                {t(
                  "contact.info.subtitle",
                  "Prefer email or phone? We’re available Sun–Thu."
                )}
              </p>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-brand-500" />
                  <a
                    className="hover:underline"
                    href="mailto:hello@bahraincode.com"
                  >
                    info@bahraincode.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-brand-500" />
                  <a className="hover:underline" href="tel:+97333000090">
                    +973 3300 0090
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-brand-500" />
                  <span>
                    {t("contact.info.address")}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-brand-500" />
                  <span>
                    {t("contact.info.hours")}
                  </span>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
