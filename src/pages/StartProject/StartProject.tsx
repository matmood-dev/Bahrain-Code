import { useState } from "react";
import { useTranslation } from "react-i18next";
import DefaultLayout from "../../layouts/DefaultLayout";
import {
  Globe,
  Smartphone,
  Cloud,
  Share2,
  BrainCircuit,
  ShoppingCart,
  Palette,
  ShieldCheck,
  Paperclip,
  Send,
} from "lucide-react";

type FormState = {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  website?: string;
  services: string[];
  budget: string;
  timeline: string;
  brief: string;
  file?: File | null;
  consent: boolean;
};

const SERVICE_OPTIONS = [
  { k: "web", labelKey: "services.cards.web.title", Icon: Globe },
  { k: "mobile", labelKey: "services.cards.mobile.title", Icon: Smartphone },
  { k: "cloud", labelKey: "services.cards.cloud.title", Icon: Cloud },
  { k: "api", labelKey: "services.cards.api.title", Icon: Share2 },
  { k: "dataai", labelKey: "services.cards.dataai.title", Icon: BrainCircuit },
  {
    k: "commerce",
    labelKey: "services.cards.commerce.title",
    Icon: ShoppingCart,
  },
  { k: "uiux", labelKey: "services.cards.uiux.title", Icon: Palette },
  {
    k: "security",
    labelKey: "services.cards.security.title",
    Icon: ShieldCheck,
  },
];

const BUDGET_OPTIONS = [
  "< 50 BHD",
  "50 – 200 BHD",
  "200 - 500 BHD",
  "500 - 1000 BHD",
  "1000+ BHD",
];
const TIMELINE_OPTIONS = ["ASAP", "1–2 months", "3–4 months", "Flexible"];

export default function StartProject() {
  const { t, i18n } = useTranslation();
  const dir = i18n.language === "ar" ? "rtl" : "ltr";

  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    company: "",
    website: "",
    services: [],
    budget: "",
    timeline: "",
    brief: "",
    file: null,
    consent: false,
  });

  const toggleService = (k: string) => {
    setForm((prev) => {
      const exists = prev.services.includes(k);
      return {
        ...prev,
        services: exists
          ? prev.services.filter((s) => s !== k)
          : [...prev.services, k],
      };
    });
  };

  const handleChange =
    (key: keyof FormState) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
    ) => {
      setForm((prev) => ({ ...prev, [key]: e.target.value }));
    };

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0] || null;
    setForm((prev) => ({ ...prev, file: f }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !form.name ||
      !form.email ||
      form.services.length === 0 ||
      !form.brief ||
      !form.consent
    ) {
      alert(t("start.errors.fillRequired", "Please fill the required fields."));
      return;
    }

    try {
      setSubmitting(true);

      // Example payload; replace with your API endpoint
      const payload = new FormData();
      payload.append("name", form.name);
      payload.append("email", form.email);
      if (form.phone) payload.append("phone", form.phone);
      if (form.company) payload.append("company", form.company);
      if (form.website) payload.append("website", form.website);
      payload.append("services", JSON.stringify(form.services));
      if (form.budget) payload.append("budget", form.budget);
      if (form.timeline) payload.append("timeline", form.timeline);
      payload.append("brief", form.brief);
      payload.append("consent", String(form.consent));
      if (form.file) payload.append("file", form.file);

      // await fetch("/api/start-project", { method: "POST", body: payload });

      // For now: simulate success
      await new Promise((r) => setTimeout(r, 900));
      setSent(true);
      setForm({
        name: "",
        email: "",
        phone: "",
        company: "",
        website: "",
        services: [],
        budget: "",
        timeline: "",
        brief: "",
        file: null,
        consent: false,
      });
    } catch (err) {
      console.error(err);
      alert(
        t("start.errors.submitFailed", "Submission failed. Please try again.")
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <DefaultLayout>
      <section className="relative overflow-hidden" dir={dir}>
        {/* soft background accents */}
        <div className="pointer-events-none absolute inset-0 opacity-70 blur-3xl -z-10">
          <div className="absolute -top-24 -end-24 h-72 w-72 rounded-full bg-brand-500/30" />
          <div className="absolute bottom-0 -start-16 h-80 w-80 rounded-full bg-brand-700/20" />
        </div>

        <div className="mx-auto max-w-7xl px-4 py-16 md:py-20">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium tracking-wide border border-white/10 bg-white/5">
              {t("start.badge", "Start a Project")}
            </span>
            <h1 className="mt-3 text-3xl md:text-4xl font-extrabold">
              {t("start.title", "Tell us about your project")}
            </h1>
            <p className="mt-3 text-[rgb(var(--muted))]">
              {t(
                "start.subtitle",
                "We’ll review your details and get back within 1–2 business days."
              )}
            </p>
            {sent && (
              <p className="mt-4 text-sm text-emerald-400">
                {t("start.success", "Thanks! Your request has been received.")}
              </p>
            )}
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="mt-10 grid gap-6 rounded-2xl border border-white/10 bg-white/5 p-6"
          >
            {/* Contact */}
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="block text-sm mb-1">
                  {t("start.fields.name", "Full name")}{" "}
                  <span className="text-brand-500">*</span>
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={handleChange("name")}
                  required
                  className="w-full rounded-lg border border-white/10 bg-transparent px-3 py-2 outline-none focus:ring-2 focus:ring-brand-500"
                  placeholder={t("start.placeholders.name", "e.g., John Doe")}
                />
              </div>
              <div>
                <label className="block text-sm mb-1">
                  {t("start.fields.email", "Email")}{" "}
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
                  {t("start.fields.phone", "Phone")}
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
                  {t("start.fields.company", "Company")}
                </label>
                <input
                  type="text"
                  value={form.company}
                  onChange={handleChange("company")}
                  className="w-full rounded-lg border border-white/10 bg-transparent px-3 py-2 outline-none focus:ring-2 focus:ring-brand-500"
                  placeholder={t("start.placeholders.company", "Your company")}
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm mb-1">
                  {t("start.fields.website", "Website")}
                </label>
                <input
                  type="url"
                  value={form.website}
                  onChange={handleChange("website")}
                  className="w-full rounded-lg border border-white/10 bg-transparent px-3 py-2 outline-none focus:ring-2 focus:ring-brand-500"
                  placeholder="https://example.com"
                />
              </div>
            </div>

            {/* Services */}
            <div>
              <label className="block text-sm mb-3">
                {t("start.fields.services", "What services do you need?")}{" "}
                <span className="text-brand-500">*</span>
              </label>
              <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
                {SERVICE_OPTIONS.map(({ k, labelKey, Icon }) => {
                  const active = form.services.includes(k);
                  return (
                    <button
                      type="button"
                      key={k}
                      onClick={() => toggleService(k)}
                      className={`flex items-center gap-3 rounded-xl border p-3 text-left transition ${
                        active
                          ? "border-brand-500/50 bg-brand-500/10"
                          : "border-white/10 bg-white/5 hover:bg-white/7"
                      }`}
                    >
                      <Icon className="h-5 w-5 text-brand-500" />
                      <span className="text-sm">{t(labelKey)}</span>
                    </button>
                  );
                })}
              </div>

              {form.services.length === 0 && (
                <p className="mt-2 text-xs text-[rgb(var(--muted))]">
                  {t(
                    "start.hints.selectService",
                    "Select at least one service."
                  )}
                </p>
              )}
            </div>

            {/* Budget & Timeline */}
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="block text-sm mb-1">
                  {t("start.fields.budget", "Budget")}
                </label>
                <select
                  value={form.budget}
                  onChange={handleChange("budget")}
                  className="w-full rounded-lg border border-white/10 bg-transparent px-3 py-2 outline-none focus:ring-2 focus:ring-brand-500"
                >
                  <option value="">
                    {t("start.placeholders.select", "Select…")}
                  </option>
                  {BUDGET_OPTIONS.map((b) => (
                    <option key={b} value={b} className="bg-black text-white">
                      {b}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm mb-1">
                  {t("start.fields.timeline", "Timeline")}
                </label>
                <select
                  value={form.timeline}
                  onChange={handleChange("timeline")}
                  className="w-full rounded-lg border border-white/10 bg-transparent px-3 py-2 outline-none focus:ring-2 focus:ring-brand-500"
                >
                  <option value="">
                    {t("start.placeholders.select", "Select…")}
                  </option>
                  {TIMELINE_OPTIONS.map((b) => (
                    <option key={b} value={b} className="bg-black text-white">
                      {b}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Brief */}
            <div>
              <label className="block text-sm mb-1">
                {t("start.fields.brief", "Project brief")}{" "}
                <span className="text-brand-500">*</span>
              </label>
              <textarea
                value={form.brief}
                onChange={handleChange("brief")}
                required
                rows={6}
                className="w-full rounded-lg border border-white/10 bg-transparent px-3 py-2 outline-none focus:ring-2 focus:ring-brand-500"
                placeholder={t(
                  "start.placeholders.brief",
                  "What are you building? Who are the users? Any examples or must-have features?"
                )}
              />
            </div>

            {/* File */}
            <div>
              <label className="block text-sm mb-1">
                {t("start.fields.file", "Attach a file (optional)")}
              </label>
              <label className="inline-flex items-center gap-2 cursor-pointer rounded-lg border border-white/10 bg-white/5 px-3 py-2 hover:bg-white/7">
                <Paperclip className="h-4 w-4" />
                <span className="text-sm">
                  {form.file
                    ? form.file.name
                    : t("start.placeholders.file", "Choose file")}
                </span>
                <input
                  type="file"
                  className="hidden"
                  onChange={handleFile}
                  accept=".pdf,.doc,.docx,.ppt,.pptx,.txt,.csv,.zip,.png,.jpg,.jpeg"
                />
              </label>
            </div>

            {/* Consent */}
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
                  "start.fields.consent",
                  "I agree to be contacted about my request."
                )}{" "}
                <span className="text-brand-500">*</span>
              </span>
            </label>

            {/* Submit */}
            <div className="flex justify-center">
              <button
                type="submit"
                disabled={submitting}
                className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-white bg-gradient-to-br from-brand-500 to-brand-700 shadow hover:opacity-95 disabled:opacity-60"
              >
                <Send className="h-4 w-4" />
                {submitting
                  ? t("start.actions.sending", "Sending…")
                  : t("start.actions.submit", "Submit")}
              </button>
            </div>
          </form>
        </div>
      </section>
    </DefaultLayout>
  );
}
